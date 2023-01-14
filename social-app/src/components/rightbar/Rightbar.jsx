import React from 'react'
import "./rightbar.css"
import CakeIcon from '@mui/icons-material/Cake';
import { Users } from '../../Data';
import FriendList from '../friendList/FriendList';

const Rightbar = ({profile}) => {

  const HomeRightbar = () =>{
  return(
    <div>
    <div className="birthdayContainer">
        <CakeIcon htmlColor='red' className='cakeIcon' />
        <span className="birthdayText">
          <b>KoKoZaw</b> and <b>3 others firends</b> have birthday today!
        </span>

      </div>
      <h3 className='sponsorText' >Sponsored</h3>
      <img src="assets/ads.jpeg" alt="" className="sponsorImg" />
      <h4 className="rightbarTitle">
        Contact
      </h4>
      <ul className="rightbarFriendList">
      {Users.map(u=>(
        <FriendList key={u.id} user={u} />
      ))}
      
      </ul>
  </div>
  )
  }

  const ProfileRightbar = () =>{
    return(
      <div>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Mandalay</span>
        </div>
        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Age:</span>
        <span className="rightbarInfoValue">25</span>
        </div>
        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle' >User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarfollowing">
          <img src="assets/fri1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">SoeSoe</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/fri2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">SoeSoe</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/fri3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">SoeSoe</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/fri4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">SoeSoe</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/person1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">SoeSoe</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/fri1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">SoeSoe</span>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='rightbar' >
     <div className="rightbarWrapper">
       {profile? <ProfileRightbar/>:<HomeRightbar/>}

     </div>
    </div>
  )
}

export default Rightbar
