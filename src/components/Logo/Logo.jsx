import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link className="bg-transparent border-0 font-bold hover:-translate-y-2 transition-all delay-100  Sk-Modernist-Bold flex flex-col tracking-[3px] text-[18px]">
      <p className="-mb-2 text-primeColor">Show</p>
      <p className="dark:text-textBase text-bgDark">CaseYuk👾.</p>
    </Link>
  )
}

export default Logo
