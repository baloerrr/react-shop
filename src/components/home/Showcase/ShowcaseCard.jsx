import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLink, FaHeart } from 'react-icons/fa'
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
          className="card w-full md:w-[380px] transition-transform delay-150 hover:-translate-y-2 hover:cursor-pointer hover:shadow-primeColor hover:shadow-md bg-gray-50 border-collapse border-[2px] border-violet-600"
        >
          <figure>
            <img
              className="w-full md:h-[210px]"
              src={showcase.img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{showcase.name}</h2>
              <h2 className="text-sm font-bold italic">{showcase.user}</h2>
            </div>
            <div className="card-actions justify-end my-2">
              {showcase.techStack.map((tech, i) => (
                <div key={i} className="badge badge-outline">
                  {tech}
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <Link
                  onClick={(e) => e.stopPropagation()}
                  className="btn z-30 rounded-full"
                >
                  <FaHeart size={17} />
                </Link>
                <span className="text-textPrimeColor font-medium">
                  {showcase.like}
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href={showcase.githubRepo}
                  onClick={(e) => e.stopPropagation()}
                  className="btn rounded-full"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href={showcase.linkWeb}
                  onClick={(e) => e.stopPropagation()}
                  className="btn rounded-full"
                >
                  <FaLink size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal untuk menampilkan deskripsi */}
      {showModal && selectedShowcase && (
        <div className="fixed w-full inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="card p-5  hover:shadow-md bg-gray-50 border-collapse border-[2px] border-primeColor w-[800px] h-auto flex justify-center flex-col gap-7">
            <div className="flex items-center justify-center">
              <figure>
                <img className="w-full h-[320px]" src={selectedShowcase.img} />
              </figure>
            </div>
            <div className="">
              <h2>{selectedShowcase.name}</h2>
              <p className="text-justify">{selectedShowcase.description}</p>
              <button className="btn bg-primeColor" onClick={closeModal}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ShowcaseCard
