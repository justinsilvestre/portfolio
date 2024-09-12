'use client'

import Link from 'next/link'
import React from 'react'


function IndexPage() {

  return (
    <div className='flex flex-col items-center justify-center md:h-[calc(100vh-3rem)] w-full pt-16 md:pt-0 px-8'>
      <h1 className='text-4xl z-10 max-md:[backdrop-filter:blur(10px)]'>Justin Silvestre<br /><span className="text-3xl">Software developer</span></h1>
      <p className="text-xl mt-5 bg-[#ececec55] [backdrop-filter:blur(10px)] rounded-lg p-2 text-center">
        TypeScript, React, Node, Electron, <Link className='underline' href="/about">and&nbsp;more</Link>.
      </p>
    </div>
  )
}

export default IndexPage
