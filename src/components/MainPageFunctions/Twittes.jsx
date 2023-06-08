import React from 'react'
import CreateTwitte from './CreateTweet'
import Posts from './Posts'

const Twittes = () => {
  return (
    <div className='posts'>
        <div className="post_home">首頁</div>
        <CreateTwitte />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
    </div>
  )
}

export default Twittes