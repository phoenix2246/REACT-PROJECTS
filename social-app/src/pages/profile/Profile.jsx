import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './profile.css'

const Profile = () => {
  return (
    <div>
      <Topbar/>
     <div className="profile">
     <Sidebar/>
     <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="/assets/cover.jpg" alt="" className="profileRightTopCoverImg" />
            <img src="/assets/person1.jpg" alt="" className="profileRightTopProfilePic" />
            </div>
            <div className="profileInfo">
            <h4 className='profileName'>WinMyintAung</h4>
            
            <span className="profileBio">Hello friends</span>
            </div>
        </div>
        <div className="profileRightBot">
          
        <Feed/>
     <Rightbar profile />
        </div>
     </div>
     
     </div>
    </div>
  )
}

export default Profile
