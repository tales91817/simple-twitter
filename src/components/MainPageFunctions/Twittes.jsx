import React from 'react'
import CreateTwitte from './CreateTweet'
import MainPosts from './MainPosts'

const Twittes = ({ allTweet, onToggleLike, onOpenModalReply, onChange, inputValue, onAddTweet, onSubmit, disabledButton, checkWordLength, checkInputIsSpace, userId, onClickedId, onChangeReply, replyId }) => {
  return (
    <div className='posts'>
        <div className="post_home">首頁</div>
        <CreateTwitte onChange={onChange} inputValue={inputValue} onAddTweet={onAddTweet} onSubmit={onSubmit} disabledButton={disabledButton} checkWordLength={checkWordLength} checkInputIsSpace={checkInputIsSpace} />
        <MainPosts allTweet={allTweet} onToggleLike={onToggleLike} onOpenModalReply={onOpenModalReply} userId={userId} onClickedId={onClickedId} onChangeReply={onChangeReply} replyId={replyId}/>
    </div>
  )
}

export default Twittes