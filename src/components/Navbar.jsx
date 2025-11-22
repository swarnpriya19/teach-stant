import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-20 border border-b-gray-200'>
            <div className='flex justify-around py-4'>
                <h1 className='text-blue-600 text-2xl font-bold'>
                    Teachstant
                </h1>
                <div className='flex gap-3 items-center'>
                    <div className='flex gap-3 items-center'>

                        <p>Dr. Sarah Wilson
                        </p>
                            <button className='px-3 py-2 bg-gray-200 rounded-lg'>Teacher</button>
                    </div>
                    <button className='font-bold bg-gray-100 px-3 py-2 rounded-lg'>Logout</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar