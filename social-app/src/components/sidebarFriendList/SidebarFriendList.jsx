import React from 'react'

const SidebarFriendList = ({user}) => {
  return (
    <div>
      <li className="sidebarFriend">
          <img src={user.profilePic} alt=""  className='sidebarFriendImg' />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}

export default SidebarFriendList
