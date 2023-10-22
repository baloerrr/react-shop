import React from 'react'
import Banner from '../../components/Banner/Banner'
import BannerBottom from '../../components/Banner/BannerBottom'
import BestSellers from '../../components/home/BestSellers/BestSellers'
import NewArrivals from '../../components/home/NewArrivals/NewArrivals'
import Sale from '../../components/home/Sale/Sale'
import SpecialOffers from '../../components/home/SpecialOffers/SpecialOffers'
import YearProduct from '../../components/home/YearProduct/YearProduct'
import ShowcaseList from '../../components/home/Showcase/ShowcaseList'

const Home = () => {
  return (
    <div className="w-full mx-auto">
      {/* <Banner /> */}
      {/* <BannerBottom /> */}
      <div className="max-w-container mx-14 px-4">
        {/* <Sale /> */}
        <ShowcaseList />
        {/* <NewArrivals /> */}
        {/* <BestSellers /> */}
      </div>

      {/* <div>
        <YearProduct />
      </div> */}

      {/* <div className="max-w-container mx-14 px-4">
        <SpecialOffers />
      </div> */}
    </div>
  )
}

export default Home
