import React from 'react'
import Navbar from '../Components/Navbar'
import { Helmet } from "react-helmet"

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <Navbar />

      <div className='sm:ml-32'>
        <div className='mx-auto max-w-4xl px-8 sm:px-0'>
          <h1 className='font-bold text-5xl'>İletişim</h1>
          <p className='text-gray-600 dark:text-gray-400 mt-2 max-w-sm'>[Benimle Discord Üzerinden İletişime Geçebilirsiniz Discord için Tıklayın](https://atomland.xyz)</p>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 ml-4 mb-4'>
        <span className="top-20 left-20 right-20 shadow-[30px_0_1000px_70px_#3730a3]"></span>
      </div>
    </div>
  )
}

export default Contact