import React from 'react'

const Users = () => {
  return (
    <div>
        <div>
            <h1 className='text-center p-4 font-bold text-lg'>Create User</h1>
            <form className=' w-[60%] mx-auto'>
                <div className=''>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='w-full px-2 py-1 outline-none border border-gray-200 rounded ' id="name" name="name" />
                </div>
                <div className=''>
                    <label htmlFor="name">Id Number</label>
                    <input type="text" className='w-full px-2 py-1 outline-none border border-gray-200 rounded ' id="id_number" name="id_number" />
                </div>
                <div className=''>
                    <label htmlFor="name">Age</label>
                    <input type="text" className='w-full px-2 py-1 outline-none border border-gray-200 rounded ' id="age" name="age" />
                </div>
                <div className=''>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='w-full px-2 py-1 outline-none border border-gray-200 rounded ' id="email" name="email" />
                </div>
                <div className='pt-2'>
                <button className='px-2 py-2 outline-none border bg-blue-500 border-gray-200 rounded ' type="submit">Create User</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Users