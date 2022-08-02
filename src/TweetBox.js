import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css"
import db from "./firebase"

function TweetBox(props) {
    const [tweetMessage, setTweetMessage] = useState({
        displayName:"",
        text:"",
        image:"",
    });
    // const [tweetImage, setTweetImage] = useState({
    //     title:"",
    //     content:""
    // });

    // const sendTweet = (e) => {
    //     e.preventDefault();

    //     db.collection("posts").add({
    //         displayName: "Shantanu Kumar",
    //         username:'shan_onfire',
    //         verified: true,
    //         text: tweetMessage,
    //         image: tweetImage,
    //         avatar: "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
    //     });
    //     setTweetMessage("");
    //     setTweetImage("");
    // };

    function handleChange(event){
        const {name,value}=event.target;

        setTweetMessage(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            };
        });
        
    }
    function submitNote(event){
        props.onAdd(tweetMessage);
        event.preventDefault();  
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQH0d1rHWRoBzg/profile-displayphoto-shrink_400_400/0/1633421762546?e=1664409600&v=beta&t=L4R3KVRNtJpXkZJS_0NZmCAKWMMqvyyr1Y9hiwhF0bU" />
                    <input
                        name='text'
                        onChange={handleChange}
                        value={tweetMessage.text}
                        placeholder='Whats happening?'
                        type="text">
                    </input>

                </div>
                    <input
                        className="tweetBox__imageInput"
                        name='image'
                        onChange={handleChange}
                        value={tweetMessage.image}
                        placeholder='Optional:Enter Image url'
                        type="text">

                        </input>
                    <input
                        className="tweetBox__imageInput"
                        name='displayName'
                        onChange={handleChange}
                        value={tweetMessage.displayName}
                        placeholder='Your Good Name'
                        type="text">

                        </input>
                <Button onClick={submitNote} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox