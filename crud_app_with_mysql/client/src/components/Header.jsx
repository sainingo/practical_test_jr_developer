import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-4 bg-gray-400 text-white'>
        <h1>CRUD App with MySQL</h1>
        <nav>
            <ul className='flex gap-2'>
                <li><a href="/">Home</a></li>
                <li><a href="/users">Users</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header