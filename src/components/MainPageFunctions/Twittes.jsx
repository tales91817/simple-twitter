import React from 'react'
import CreateTwitte from './CreateTweet'
import Posts from './Posts'

const Twittes = ({ postCards, onToggleLike }) => {
  return (
    <div className='posts'>
        <div className="post_home">首頁</div>
        <CreateTwitte />
        <Posts postCards={postCards} onToggleLike={onToggleLike}/>
    </div>
  )
}

export default Twittes