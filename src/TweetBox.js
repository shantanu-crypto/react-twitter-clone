import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css"
import db from "./firebase"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Shantanu Kumar",
            username:'shan_onfire',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQH0d1rHWRoBzg/profile-displayphoto-shrink_400_400/0/1633421762546?e=1664409600&v=beta&t=L4R3KVRNtJpXkZJS_0NZmCAKWMMqvyyr1Y9hiwhF0bU" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder='Whats happening?'
                        type="text">

                    </input>

                </div>
                    <input
                        onChange={(e) => setTweetImage(e.target.value)}
                        value={tweetImage}
                        className="tweetBox__imageInput"
                        placeholder='Optional:Enter Image url'
                        type="text">

                        </input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox