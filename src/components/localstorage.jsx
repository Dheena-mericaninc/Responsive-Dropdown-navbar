import React from 'react'

const LocalStorage = () => {
    localStorage.setItem('id',1)

  return (
    <div>
      <input type="text" placeholder='Enter your name' />
      <button>Add{localStorage.getItem('id')}</button>
    </div>
  )
}

export default LocalStorage
