import React from 'react'

export default function Loader() {
  return (
    <div className='mt-5'>
        <div className='spinner-border mt-5' role='status' style={{width: '50px', height: '50px'}}>
            <span className='sr-only'>Loading...</span>
        </div>
      
    </div>
  )
}

 