import React, { useContext, useState } from 'react'
import { Divider } from '@mui/material'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import Logo from '../../components/Logo/Logo'
import Toggle from '../../components/Toggle/Toggle'
import { useAuth } from '../../hook/useAuth'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errEmail, setErrEmail] = useState('')
  const [errPassword, setErrPassword] = useState('')

  const [successMsg, setSuccessMsg] = useState('')

  const [currentUser, setCurrentUser] = useState(null)

  const navigate = useNavigate()

  const { handleLoginGithub } = useAuth()

  const handleGithub = (e) => {
    e.preventDefault()
    try {
      handleLoginGithub()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword('')
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    if (!email) {
      setErrEmail('Enter your email')
    }

    if (!password) {
      setErrPassword('Create a password')
    }

    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`,
      )
      setEmail('')
      setPassword('')
    }
  }
  return (
    <div className="w-full relative h-screen dark:bg-bgDark flex items-center justify-center">
      <div className="div absolute top-5 left-10 md:ml-10">
        <Logo />
      </div>

      <div className="div absolute top-5 right-10 md:mr-10 md:mt-3">
        <Toggle />
      </div>

      <form>
        <h1 className="font-titleFont text-textPrimeColor text-center decoration-[1px] font-semibold md:text-[50px] tracking-[3px]">
          Masuk
          <span className="dark:text-bgBase text-bgDark rounded-full">.</span>
        </h1>
        {/* <p className="text-center dark:text-bgBase font-medium my-2 w-full text-[17px] tracking-[2px] Sk-Modernist-Regular">
          Ayoo Bergabung Dan Temukan Showcase Inspiratif!
        </p> */}
        <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center lgl:w-[450px]">
          <div className="flex flex-col gap-3 ">
            {/* Email */}
            <div className="flex flex-col gap-.5">
              <Link
                to={'/'}
                className="btn w-full bg-transparent border-primeColor hover:bg-primeColor hover:text-white dark:hover:border-primeColor flex justify-start capitalize"
              >
                <FaGithub className="dark:text-white" size={27} />
                <span className="text-lg dark:text-white">
                  Masuk Dengan Github
                </span>
              </Link>
              {/* <input
                onChange={handleEmail}
                value={email}
                className="w-full h-12 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-[5px] border-[1px] bg-bgBase border-gray-400 outline-none mb-2"
                type="email"
                placeholder="john@workemail.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )} */}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-.5">
              <Link
                to={'/'}
                className="btn w-full bg-transparent border-primeColor hover:bg-primeColor hover:text-white flex justify-start dark:hover:border-primeColor capitalize"
              >
                <FaGoogle className="dark:text-white" size={27} />
                <span className="text-lg dark:text-white">
                  Masuk Dengan Google
                </span>
              </Link>
              {/* {errPassword && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPassword}
                </p>
              )} */}
            </div>

            {/* <button
              onClick={handleSignUp}
              className="btn bg-primeColor text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-12 rounded-md text-[15px] duration-300 Sk-Modernist-Bold tracking-[0.5px]"
            >
              Masuk
            </button> */}

            {/* <button
              onClick={handleSignUp}
              className="btn bg-bgBase text-bgDark hover:text-white cursor-pointer w-full text-base font-medium h-12 rounded-md text-[15px] duration-300 Sk-Modernist-Bold tracking-[0.5px]"
            >
              <FaGoogle className="text-neutral" />
              Lanjutkan Dengan Google
            </button> */}
            <Divider className="text-black dark:text-white " light={true}>
              or
            </Divider>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="font-bold dark:text-white">
            Belum memiliki akun?{' '}
            <Link className="underline text-primeColor" to={'/signup'}>
              Daftar
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignIn
