import React from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";
import { Posts } from '../../Data';

const Feed = () => {
  return (
    <div className='feed' >
      <div className="feedWrapper">
        <Share/>
        {
          Posts.map(p=>(
            <Post post={p} key={p.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feed
