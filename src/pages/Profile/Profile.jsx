import React from 'react'
import BannerProfile from '../../components/Profile/BannerProfile'
import InfoProfile from '../../components/Profile/InfoProfile'
import CardShowcaseP from '../../components/Profile/CardShowcaseP'

function Profile() {
  return (
    <div className=" w-full h-auto overflow-hidden ">
      <BannerProfile />
      <div className="flex flex-col md:mx-14 mx-5 w-full h-auto justify-center">
        <InfoProfile />
        <CardShowcaseP />
      </div>
    </div>
  )
}

export default Profile
