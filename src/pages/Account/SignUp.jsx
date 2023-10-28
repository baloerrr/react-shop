import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Divider } from '@mui/material'
import Toggle from '../../components/Toggle/Toggle'

const SignUp = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [zip, setZip] = useState('')
  const [checked, setChecked] = useState(false)
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [errPhone, setErrPhone] = useState('')
  const [errPassword, setErrPassword] = useState('')
  const [errAddress, setErrAddress] = useState('')
  const [errCity, setErrCity] = useState('')
  const [errCountry, setErrCountry] = useState('')
  const [errZip, setErrZip] = useState('')
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState('')
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value)
    setErrClientName('')
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail('')
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
    setErrPhone('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword('')
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
    setErrAddress('')
  }
  const handleCity = (e) => {
    setCity(e.target.value)
    setErrCity('')
  }
  const handleCountry = (e) => {
    setCountry(e.target.value)
    setErrCountry('')
  }
  const handleZip = (e) => {
    setZip(e.target.value)
    setErrZip('')
  }
  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
  }
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault()
    if (checked) {
      if (!clientName) {
        setErrClientName('Enter your name')
      }
      if (!email) {
        setErrEmail('Enter your email')
      } else {
        if (!EmailValidation(email)) {
          setErrEmail('Enter a Valid email')
        }
      }
      if (!phone) {
        setErrPhone('Enter your phone number')
      }
      if (!password) {
        setErrPassword('Create a password')
      } else {
        if (password.length < 6) {
          setErrPassword('Passwords must be at least 6 characters')
        }
      }
      if (!address) {
        setErrAddress('Enter your address')
      }
      if (!city) {
        setErrCity('Enter your city name')
      }
      if (!country) {
        setErrCountry('Enter the country you are residing')
      }
      if (!zip) {
        setErrZip('Enter the zip code of your area')
      }
      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`,
        )
        setClientName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setAddress('')
        setCity('')
        setCountry('')
        setZip('')
      }
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
          Daftar
          <span className="dark:text-bgBase text-bgDark rounded-full">.</span>
        </h1>
        <p className="text-center dark:text-bgBase font-medium my-2 w-full text-[17px] tracking-[2px] Sk-Modernist-Regular">
          Ayoo Bergabung Dan Temukan Showcase Inspiratif!
        </p>
        <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center lgl:w-[450px]">
          <div className="flex flex-col gap-3 ">
            {/* Email */}
            <div className="flex flex-col gap-.5">
              <Link
                to={'/'}
                className="btn w-full bg-transparent border-primeColor hover:bg-primeColor hover:text-white flex justify-start dark:hover:border-primeColor capitalize"
              >
                <FaGithub className="dark:text-white" size={27} />
                <span className="text-lg dark:text-white">
                  Daftar Dengan Github
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
                  Daftar Dengan Google
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
            Sudah memiliki akun?{' '}
            <Link className="underline text-primeColor" to={'/signin'}>
              Masuk
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
