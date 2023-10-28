import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaLink,
  FaHeart,
  FaDonate,
  FaWindowClose,
} from 'react-icons/fa'
import { ShowCaseList } from '../../../constants'

function ShowcaseCard() {
  const [showModal, setShowModal] = useState(false)
  const [selectedShowcase, setSelectedShowcase] = useState(null)

  const openModal = (showcase) => {
    setSelectedShowcase(showcase)
    setShowModal(true)
  }

  const closeModal = () => {
    setSelectedShowcase(null)
    setShowModal(false)
  }

  return (
    <>
      {ShowCaseList.map((showcase) => (
        <div
          key={showcase.id}
          onClick={() => openModal(showcase)}
          className="card w-full md:w-[380px] transition delay-150 ease-in-out duration-300 hover:duration-300 hover:cursor-pointer hover:shadow-[0px_0px_19px_-5px_rgba(129,12,168,1)] bg-gray-50 border-collapse border-[2px] shadow-[0px_0px_19px_-5px_rgba(217,217,217,0.70)]"
        >
          <figure>
            <img
              className="object-cover md:h-[210px]"
              src={showcase.img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{showcase.name}</h2>
              <h2 className="text-sm font-bold italic">{showcase.user}</h2>
            </div>
            <div className="card-actions justify-start flex gap-5 my-2">
              {showcase.imgStack.map((img, i) => (
                <div className="shadow-md rounded-full p-1" key={i}>
                  <img src={img} className="w-5 h-5 object-contain" alt="" />
                  {/* {showcase.techStack.map((tech, i) => (
                    <span>{tech[i]}</span>
                  ))} */}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex gap-4 items-center">
                <Link
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full hover:bg-primeColor p-2 transition ease-in-out hover:shadow-md hover:shadow-primeColor hover:text-white hover:duration-300"
                >
                  <FaHeart size={20} />
                </Link>

                <span className="text-textPrimeColor font-medium">
                  {showcase.like}
                </span>
              </div>
              <div
                className="flex gap-4
              "
              >
                <div className="rounded-full hover:bg-primeColor p-2 transition ease-in-out hover:shadow-md hover:shadow-primeColor hover:text-white hover:duration-300">
                  <a onClick={(e) => e.stopPropagation()}>
                    <FaDonate size={20} />
                  </a>
                </div>
                <div className="rounded-full hover:bg-primeColor p-2 transition ease-in-out hover:shadow-md hover:shadow-primeColor hover:text-white hover:duration-300">
                  <a
                    href={showcase.githubRepo}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-full"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <div className="rounded-full hover:bg-primeColor p-2 transition ease-in-out hover:shadow-md hover:shadow-primeColor hover:text-white hover:duration-300">
                  <a
                    href={showcase.linkWeb}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-full"
                  >
                    <FaLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal untuk menampilkan deskripsi */}
      {showModal && selectedShowcase && (
        <div className="fixed w-full inset-0 flex  items-center justify-center z-50 overflow-x-scroll">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="card mx-5 p-3 hover:shadow-md bg-gray-50 border-collapse border-[2px] max-w-screen-lg  w-full h-auto flex justify-center flex-col gap-7 my-8">
            <div className="flex justify-between -mb-5">
              <h2 className="font-extrabold text-lg underline">
                {selectedShowcase.name}
              </h2>
              <FaWindowClose
                className="rounded-full text-red-600 cursor-pointer"
                size={25}
                onClick={closeModal}
              />
            </div>
            <div className="flex justify-center items-center -mb-5">
              <img
                className="object-cover rounded-2xl max-h-[320px] w-full"
                src={selectedShowcase.img}
              />
            </div>
            <div className="card-actions justify-start -mb-5">
              {selectedShowcase.imgStack.map((img, i) => (
                <div className="shadow-md rounded-full p-1" key={i}>
                  <img
                    key={i}
                    src={img}
                    className="w-5 h-5 object-contain"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="-mb-5">
              <p className="text-justify">{selectedShowcase.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={selectedShowcase.githubRepo}
                className="btn btn-primary py-2 rounded-2xl"
              >
                <FaGithub size={20} />
                <span className="capitalize font-bold">Repositori Github</span>
              </a>
              <a
                href={selectedShowcase.linkWeb}
                className="btn btn-secondary py-2 rounded-2xl"
              >
                <FaLink size={20} />
                <span className="capitalize font-bold">Website</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ShowcaseCard
