import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="\assets\person1.jpg" alt="" className='profileImg'/>
                <input type="text" placeholder='What is on ur mind?' className='shareTopInput' />
            </div>
            <hr className="shareHr" />
            <div className="shareBot">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor='red' className='mediaIcon' />
                        <span className="shareOptionText">
                            Photo/Videos
                        </span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor='green' className='mediaIcon' />
                        <span className="shareOptionText">
                        Tag
                        </span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon htmlColor='blue' className='mediaIcon' />
                        <span className="shareOptionText">
                           Location
                        </span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='mediaIcon' />
                        <span className="shareOptionText">
                            Feeling
                        </span>
                    </div>
                </div>
                <div className="shareBtn">
                    Share
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share
