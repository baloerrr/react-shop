import React from 'react'
import CardUser from './CardUser'
import Profile from '../../assets/images/techstack/bootstrap.png'

function UserPopuler() {
  return (
    <div className="flex flex-col w-full mt-[150px] mb-20">
      <h1 className="ml-[90px] mb-7 my-[10px] text-[25px] font-bold text-slate-800">
        Showcase Populer
      </h1>
      <div className="flex md:flex-row justify-center flex-col md:gap-5 gap-10">
        <CardUser />
      </div>
    </div>
  )
}

export default UserPopuler
