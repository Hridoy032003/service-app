import ServiceProvidersCard from '@/components/globle-component/ServiceProvidersCard';
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold py-5'>Our providers</h1>
      <div className=' items-center '>
        
        < ServiceProvidersCard/>
      </div>
    </div>
  );
}

export default page