import { useEffect, useState, useRef } from 'react';


const HomeArticles = () => {
    const allPosts = [].fill(12)
  const [selected, setSelected] = useState()
let counterPerScroll = 6

 
  return (
    <div id="containerHome">
      {allPosts.map((post, i) => {
        
            <div id="container">
                <p>Aloha</p>
            </div>
       
      })}
    </div>
  )
}

export default HomeArticles
