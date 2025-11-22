import React from 'react'

const Card = () => {
  return (
    <div className='w-full bg-gray-100  mx-2 py-6 my-1 px-4'>
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='font-bold'>Unit test 1 - Mathematics</h2>
                <div className='flex gap-5'>
                    <p>Mathematics</p>
                    <li>Class 10 A</li>
                    <li>Feb 15,2024</li>
                    <li>90mins</li>
                    <li>100 marks</li>
                </div>
            </div>
            <div className='flex'>
                <button className='px-3 py-2 rounded-lg bg-green-100 text-green-700 font-bold   '>Completed</button>
                <button className='px-3 py-2 rounded-lg'>edit</button>
                <button className='px-3 py-2 rounded-lg'>delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card