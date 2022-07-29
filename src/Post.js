import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/Chat"
import ReapeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/Favorite"
import PublishIcon from "@material-ui/icons/Publish"




function Post({displayName,
    username,
    verified,
    text,
    image,
    avatar}) {
    
  return (
    <div className="post">
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>{displayName}{" "}
                    <span className='post__headerSpecial'>
                        {verified && <VerifiedUserIcon className="post__badge" />}@{username}
                    </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}
                    </p>
                </div>
            </div>
            <img src={image}></img>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small" />
                <ReapeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>
  )
}

export default Post