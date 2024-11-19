const Banner = () => {
    return (
        <div className=' bg-[url(Components/Banner/Image/recipe.jpg)] flex justify-center items-center p-8 text-center bg-cover bg-no-repeat rounded-2xl'>
            <div className='text-white bg-gradient-to-r from-[#150b2b2f] to-[#150b2b30] space-y-10  p-8 '>
                <h1 className='text-2xl lg:text-4xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className=' lg:w-1/2 lg:mx-auto font-bold'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <button className='bg-green-400 p-2 font-bold rounded-2xl p-x-4'>Explore Now</button>
                <button className='bg-transparent font-bold border ml-4 border-white text-white p-2 rounded-2xl'>Our Feedback</button>
            </div>
        </div>
    );
};
export default Banner;