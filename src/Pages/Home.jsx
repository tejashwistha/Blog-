import React from 'react'
import Head from '../Components/Head'
import Searches from '../Components/Searches'
import Intro from '../Components/Intro'
import BlogList from '../Components/BlogList'
import Footers from '../Components/Footers'




function Home() {
  return (
   
     <div>
     <Head/>
           <Searches/>
           <Intro/>
           <BlogList/>
         {/* footer*/}
         <Footers/>
     </div>

  )
}

export default Home
