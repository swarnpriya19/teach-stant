import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-80 h-[91vh]  shadow-2xl '>
            <div className='w-full  capitalize text-xl px-3 py-10 flex flex-col gap-5 font-medium'
            >
                <h2 className='mx-6'>DashBoard</h2>
                <h2 className='mx-6'>Atendance</h2>
                <h2 className='mx-6'>upload Marks</h2>
                <h2 className='bg-blue-600 px-3 mx-3 py-2 rounded-lg text-white font-bold'>Exams</h2>
            </div>
        </div>
    )
}

export default Sidebar