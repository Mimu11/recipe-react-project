import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Blogs from './Components/Blogs/Blogs'

import Header from './Components/Header/Header'
import './index.css'
import CookItems from './Components/CookItems/CookItems'
function App() {
  const [cookItems, setCookItems] = useState([]);
  const handleCook2 = (id) => {

    const remaining = cookItems.filter(items => items.id !== id)
    setCookItems(remaining)
  }
  const handleWantCook = (blog) => {
    const isExist = cookItems.find(select => select.id == blog.id)
    if (!isExist) {
      const newCookItems = [...cookItems, blog];
      setCookItems(newCookItems);
    }
    else {
      alert('Already selected')
    }
  }


  return (
    <>
      <div className='max-w-7xl mx-auto'>

        <Header></Header>
        <Banner></Banner>
        <div className='text-center space-y-6 my-6'>
          <h1 className='text-4xl font-bold'>Our Recipes</h1>
          <p className='lg:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
        <div className='lg:flex gap-4'>
          <Blogs handleWantCook={handleWantCook}></Blogs>
          <CookItems
            handleCook2={handleCook2}
            cookItems={cookItems}
          ></CookItems>
        </div>

      </div>
    </>
  )
}

export default App
