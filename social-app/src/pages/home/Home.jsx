import "./home.css"

import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import Topbar from '../../components/topbar/Topbar';

const Home = () => {
  return (
    <div>
     <Topbar/>
     <div className="homeContainer">
     <Sidebar/>
     <Feed/>
     <Rightbar/>
     </div>
     
      
    </div>
  )
}

export default Home
