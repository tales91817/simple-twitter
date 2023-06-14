import React from 'react'
import CreateTwitte from './CreateTweet'
import Posts from './Posts'

const Twittes = ({ tweets, onToggleLike, onOpenModalReply, onChange, inputValue, onAddTweet }) => {
  return (
    <div className='posts'>
        <div className="post_home">首頁</div>
        <CreateTwitte  onChange={onChange} inputValue={inputValue} onAddTweet={onAddTweet} />
        <Posts tweets={tweets} onToggleLike={onToggleLike} onOpenModalReply={onOpenModalReply} />
    </div>
  )
}

export default Twittes