import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../Data';

const Post = ({post}) => {
   const [like,setLike] = useState(post.like)
   const [isLiked,setIsLiked] = useState(false)
   const likeHandler = () =>{
    setLike(isLiked? like -1 : like +1)
    setIsLiked(!isLiked)
   }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src={Users.filter((u)=>u.id===post.userId)[0].profilePic} alt="" className='postProfileImg'/>
                <span className="postUserName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                <span className="postDate">{post.date} </span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='postTopRightIcon'/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postCenterText">{post.desc}</span>
                <img src={post.photo} alt="" className='postCenterImg' />
            </div>
            <div className="postBot">
                <div className="postBotLeft">
                <ThumbUpIcon htmlColor='blue' className='loveIcon' onClick={likeHandler}/>
                <FavoriteIcon htmlColor='red' className='loveIcon' onClick={likeHandler} />
                <span className="likeCounter">{like} people like this</span>
                    
                </div>
                <div className="postBotRight">
                    <span className="commentCounter">
                        {post.comment} comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
