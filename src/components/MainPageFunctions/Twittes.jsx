import React from 'react'
import CreateTwitte from './CreateTweet'
import MainPosts from './MainPosts'

const Twittes = ({ allTweet, onToggleLike, onOpenModalReply, onChange, inputValue, onAddTweet }) => {
  return (
    <div className='posts'>
        <div className="post_home">首頁</div>
        <CreateTwitte onChange={onChange} inputValue={inputValue} onAddTweet={onAddTweet} />
        <MainPosts allTweet={allTweet} onToggleLike={onToggleLike} onOpenModalReply={onOpenModalReply} />
    </div>
  )
}

export default Twittes