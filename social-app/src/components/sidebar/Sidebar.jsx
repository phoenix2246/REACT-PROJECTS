import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import { Users } from '../../Data';
import SidebarFriendList from '../sidebarFriendList/SidebarFriendList';

const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeedIcon className='sidebarIcon' />
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <ChatIcon className='sidebarIcon' />
          <span className="sidebarListItemText">Chat</span>
        </li>
        <li className="sidebarListItem">
          <OndemandVideoIcon className='sidebarIcon' />
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <GroupsIcon className='sidebarIcon' />
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <WorkIcon className='sidebarIcon' />
          <span className="sidebarListItemText">Job</span>
        </li>
        <li className="sidebarListItem">
          <EventIcon className='sidebarIcon' />
          <span className="sidebarListItemText">Event</span>
        </li>
        
      </ul>
      <button className="sidebarBtn">ShowMore</button>
      <hr className="sidebarHr" />
      <ul className="sidebarFriendList">
        {
          Users.map(u=>(
            <SidebarFriendList key={u.id} user={u} />
          ))
        }
   
      </ul>
      </div>
    </div>
  )
}

export default Sidebar

