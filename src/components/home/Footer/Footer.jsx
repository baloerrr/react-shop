import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'
import FooterListTitle from './FooterListTitle'
import { paymentCard } from '../../../assets/images'
import Image from '../../designLayouts/Image'

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState('')
  const [subscription, setSubscription] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }

  const handleSubscription = () => {
    if (emailInfo === '') {
      setErrMsg('Please provide an Email !')
    } else if (!emailValidation(emailInfo)) {
      setErrMsg('Please give a valid Email!')
    } else {
      setSubscription(true)
      setErrMsg('')
      setEmailInfo('')
    }
  }
  return (
    <div className="w-full bg-[#F5F5F3] dark:bg-slate-900">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10"></div>
    </div>
  )
}

export default Footer
