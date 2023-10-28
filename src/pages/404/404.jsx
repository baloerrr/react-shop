import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-white dark::bg-slate-900">
      <div className="flex gap-5">
        <h1 class="text-9xl font-extrabold dark:text-white tracking-widest">
          👾
        </h1>
        <h1 class="text-9xl font-extrabold dark:text-white tracking-widest">
          404
        </h1>
      </div>
      <div class="bg-primeColor text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-primeColor border border-current">
            <Link to="/showcase">Go Showcase</Link>
          </span>
        </a>
      </button>
    </main>
  )
}

export default NotFound
