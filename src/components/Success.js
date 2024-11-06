import React from 'react'

export default function Success({message}) {
  return (
    <div>
      <div className='alert alert-success' role='alert' style={{ width: '300px', margin: '0 auto' }}>
        {message}
      </div>
    </div>
  )
}


