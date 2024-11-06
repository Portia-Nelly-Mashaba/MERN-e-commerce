import React from 'react'

export default function Error({error}) {
  return (
    <div >
      <div className='alert alert-danger' role='alert' style={{ width: '300px', margin: '0 auto' }}>
        {error}
      </div>
    </div>
  )
}


