import React from 'react'
import ShowcaseList from '../../components/home/Showcase/ShowcaseList'
import BannerBottom from '../../components/Banner/BannerBottom'

function Showcase() {
  return (
    <div className="w-full mx-auto">
      <BannerBottom />
      <div className="max-w-container mx-14 px-4">
        <ShowcaseList />
      </div>
    </div>
  )
}

export default Showcase
