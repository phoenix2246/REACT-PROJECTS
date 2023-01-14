import React from 'react'
import "./friendList.css"

const FriendList = ({user}) => {
  return (
    <div>
        <li className="rightbarFriend">
            <img src={user.profilePic} alt="" className='rightbarFriendImg' />
            <span className="friendOnline"></span>
            <span className="rightbarFriendUserName">{user.username}</span>
          </li>
    </div>
  )
}

export default FriendList
