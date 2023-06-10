/* eslint-disable */ 
import React from 'react'
import Posts from 'components/MainPageFunctions/Posts'
import './stateContent.scss'

const stateContent = () => {
  return (
    <div className="userStatusCollection">
        <div className="classCollection">
            <div className="class active">推文</div>
            <div className="class">回覆</div>
            <div className="class">喜歡的內容</div>
        </div>
        {/* <Posts /> */}
    </div>
  )
}

export default stateContent