import React from 'react'

const Task = () => {
  return (
    <div>
        <div>
            <h1 className='text-center p-4 font-bold text-lg'>Create Task</h1>
            <form className=' w-[60%] mx-auto'>
                <div className=''>
                    <label htmlFor="name">Task Name</label>
                    <input type="text" className='w-full px-2 py-1 outline-none border border-gray-200 rounded ' id="task" name="task" />
                </div>
                <div className=''>
                    <label htmlFor="name">Priority</label>
                    <input type="text" className='w-full px-2 py-1 outline-none border border-gray-200 rounded ' id="priority" name="priority" />
                </div>
                <div className=''>
                    <label htmlFor="name">Tracking Date</label>
                    <input type="text" className='w-full px-2 py-1 outline-none border border-gray-200 rounded ' id="tracking_date" name="tracking_date" />
                </div>
                <div className='pt-2'>
                <button className='px-2 py-2 outline-none border bg-blue-500 border-gray-200 rounded ' type="submit">Create Task</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Task