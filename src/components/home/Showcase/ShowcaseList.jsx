import React from 'react'
import ShowcaseCard from './ShowcaseCard'

function ShowcaseList() {
  return (
    <div className="flex justify-start md:flex-row w-full flex-col md:flex-wrap gap-5 my-4">
      <ShowcaseCard />
    </div>
  )
}

export default ShowcaseList
