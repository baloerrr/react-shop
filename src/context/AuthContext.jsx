import { createContext, useState, useEffect } from 'react'
import { auth, githubProvider } from '../services/firebase.js'
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleLoginGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken

        const user = result.user
        setCurrentUser(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GithubAuthProvider.credentialFromError(error)
      })
  }

  const signOut = () => {
    setCurrentUser(null)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    handleLoginGithub,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
