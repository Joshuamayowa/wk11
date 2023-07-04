import React from 'react'
import Coures from './Coures'

import { Fasthand, Outfit } from 'next/font/google'

const slow = Outfit({ 
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Students in Univelcity',
  description: 'Understanding the principle of Next',
}
export default function layout({children}) {
  return (
    <div>
        {children}
        <Coures/>
    </div>
  )
}


