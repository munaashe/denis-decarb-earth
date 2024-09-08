import React from 'react'
import Actions from './actions'
import Stats from './stats'

const Home = () => {
  return (
    <div className='p-8 m-4 rounded-2xl bg-white min-h-[90vh]'>
      <Stats />
      <Actions />
    </div>
  )
}

export default Home
