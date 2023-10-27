// import React, { useEffect } from 'react'
// import ShowcaseList from '../../components/home/Showcase/ShowcaseList'
// import { useAuth } from '../../hook/useAuth'
// import { Navigate } from 'react-router-dom'
// import axios from 'axios'

// const Home = () => {
//   const { currentUser, signOut } = useAuth()

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://bvdtk3k5-8000.asse.devtunnels.ms/api/penjualan',
//         )
//         console.log(response.data)
//       } catch (error) {
//         console.error(error.response.data)
//       }
//     }

//     fetchData()
//   }, [])

//   return currentUser ? (
//     <div className="w-full mx-auto">
//       <div className="max-w-container mx-14 px-4">
//         <ShowcaseList />
//       </div>
//     </div>
//   ) : (
//     <Navigate to={'signin'} replace />
//   )
// }

// export default Home

import React, { useEffect } from 'react'
import Landing from '../../components/Landing/Landing'
import UserPopuler from '../../components/Landing/UserPopuler'
import axios from 'axios'

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://89a4-110-137-114-94.ngrok-free.app/api/penjualan',
  //       )
  //       console.log(response.data)
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //   }

  //   fetchData()
  // }, [])
  return (
    <div className="w-full mx-auto bg-white dark:bg-slate-900 overflow-hidden md:flex md:justify-center ">
      <div className="max-w-container  md:mx-14 mx-2 px-4 flex flex-col md:justify-center  ">
        <Landing />
        <UserPopuler />
      </div>
    </div>
  )
}

export default Home
