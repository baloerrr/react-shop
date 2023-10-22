import React from 'react'
import NavTitle from './NavTitle'
import { ShowCaseList } from '../../../../constants'
import { Link } from 'react-router-dom'
import { FaGithub, FaHeart, FaLink } from 'react-icons/fa'

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ]
  return (
    <div className="cursor-pointer">
      {ShowCaseList.map((showcase) => (
        <div
          key={showcase.id}
          className="card w-full md:w-[380px] transition-transform delay-150 hover:-translate-y-2 hover:cursor-pointer hover:shadow-primeColor hover:shadow-md bg-gray-50 border-collapse border-[2px] border-primeColor"
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
                <Link className="btn rounded-full">
                  <FaHeart size={17} />
                </Link>
                <span className="text-textPrimeColor font-medium">
                  {showcase.like}
                </span>
              </div>
              <div className="flex gap-4">
                <a href={showcase.githubRepo} className="btn rounded-full">
                  <FaGithub size={17} />
                </a>
                <a href={showcase.linkWeb} className="btn rounded-full">
                  <FaLink size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Price
