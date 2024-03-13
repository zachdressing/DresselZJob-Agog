import React from 'react'

const Home = () => {
    return (
        <div>
            <section className="bg-center h-[95.1vh] bg-no-repeat bg-[url('https://www.svgrepo.com/show/51022/working.svg')] bg-gray-600 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-7xl lg:text-8xl">Zach's <span className='text-2xl'>(current)</span> Dream Jobs</h1>
                    <br/>
                    <p className="mb-8 text-xl font-normal text-gray-200 lg:text-2xl sm:px-16 lg:px-48">As a fresh Junior Dev, there is almost nothing I <i>don't</i> want to do.<br/><br/> However, to keep things specific, I believe that the greatest invention by any software developer, the greatest intention by any software developer, and also being the original purpose of the internet, is to connect people together through technology.<br/><br/> At the right side of the navbar are my top 5 jobs that have me "agog" (excited).</p>
                </div>
            </section>
        </div>
    )
}

export default Home
