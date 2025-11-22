import React from 'react'
import Card from './Card'

const Home = () => {
    return (
        <div className='w-full h-[91vh] overflow-y-scroll overflow-x-hidden '>
            <div className='px-10 py-9'>
                <h1 className='text-3xl font-bold'>Manage Exams</h1>
                <p className='text-gray-400'>Create and manage  examinations</p>
            </div>
            <div className='w-full h-auto flex gap-14 mx-10 capitalize '>
                <div className='w-96  rounded-lg shadow-2xl px-6  py-5  flex flex-col gap-4'>
                    <div className='flex justify-between '>

                        <h2 className='font-semibold'>Total Exams</h2>
                        <p>Logo</p>
                    </div>
                    <div className=''>

                    <h1 className='text-2xl font-bold'>4</h1>
                    <p className='text-gray-400'>All time</p>

                    </div>
                </div>
                <div className='w-80  rounded-lg shadow-2xl px-6 py-5 flex flex-col gap-4'>
                    <div className='flex justify-between '>

                        <h2 className='font-semibold'>Upcoming</h2>
                        <p>Logo</p>
                    </div>
                    <div className=''>

                    <h1 className='text-2xl font-bold'>3</h1>
                    <p className='text-gray-400'>Scheduled</p>

                    </div>
                </div>
                <div className='w-80  rounded-lg shadow-2xl px-6 py-5  flex flex-col gap-4'>
                    <div className='flex justify-between '>

                        <h2 className='font-semibold'>Completed</h2>
                        <p>Logo</p>
                    </div>
                    <div className=''>

                    <h1 className='text-2xl font-bold'>2</h1>
                    <p className='text-gray-400'>Finish</p>

                    </div>
                </div>
                <div className='w-80  rounded-lg shadow-2xl px-6 py-5  flex flex-col gap-4'>
                    <div className='flex justify-between '>

                        <h2 className='font-semibold'>this week</h2>
                        <p>Logo</p>
                    </div>
                    <div className=''>

                    <h1 className='text-2xl font-bold'>0</h1>
                    <p className='text-gray-400'>Next 7 days</p>

                    </div>
                </div>
            </div>
            <div className='  shadow-2xl m-10 px-10 py-6'>
                <h1 className='text-2xl font-bold'>Filter Exams</h1>
                <p className='text-gray-400'> Filter by exam status</p>
                <div className='flex my-6 text-white font-semibold gap-5'>
                    <button className='px-3 py-2 bg-blue-500 rounded-lg'>All Exams</button>
                    <button className='px-3 py-2 text-black shadow-2xl border border-gray-200 rounded-lg'>Upcoming</button>
                    <button className='px-3 py-2 text-black shadow-2xl border border-gray-200 rounded-lg'>Completed</button>
                </div>
            </div>
            <div className='w-[81vw]  relative  px-10 py-3 shadow-2xl bg-white mx-10'>
                <h1 className='text-2xl font-bold px-10 py-4'>Exam Schedule</h1>
                <p className='text-gray-400 px-10'>You created examinations</p>
                <div className='w-[96%]  flex flex-col gap-y-5 my-3 px-8 py-1 '>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Home