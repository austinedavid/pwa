import InstallButton from '@/components/Installbutton'
import Notify from '@/components/Notify'
import React from 'react'

const Install = () => {
  return (
    <div>
        <div className=' px-2 py-1 bg-green-700 text-white rounded-sm' >
            <p>below</p>
            <InstallButton/>
            <Notify/>
        </div>
    </div>
  )
}

export default Install