import React, { useEffect, useState } from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"
import db from "./firebase"

function Feed() {
    const [posts,setPosts]=useState([]);

    // useEffect(()=>{
    //     db.collection('posts').onSnapshot(snapshot=>(
    //         setPosts(snapshot.docs.map(doc=>doc.data()))
    //     ))
    // },[])

    const [messages, setMessages]=useState([]);

    function addNote(note){
        setMessages(prevNotes=>{
            return [...prevNotes,note];
        });
    }

  return (
    <div className="feed">
    <div className="feed__header">
        <h2>Home</h2>
    </div>
    <TweetBox 
        onAdd={addNote}
    />
    {/* {posts.map(post=>(
        <Post 
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
    ))} */}
    
    {messages.map((allMessage)=>{
        return <Post 
            displayName={allMessage.displayName}
            text={allMessage.text}
            image={allMessage.image}
        />
    })}

    <Post 
        displayName="Shantanu Kumar Kar"
        username="shan_onfire"
        verified={true}
        text="Yoo it's working. Finally I made it 😭🥺🤧 #hardwork"
        avatar="https://media-exp1.licdn.com/dms/image/C4E03AQH0d1rHWRoBzg/profile-displayphoto-shrink_400_400/0/1633421762546?e=1664409600&v=beta&t=L4R3KVRNtJpXkZJS_0NZmCAKWMMqvyyr1Y9hiwhF0bU"
        image="https://media3.giphy.com/media/J7jsbfcJ2O5eo/giphy.gif"
        />
    <Post 
        displayName="Sourabh Chandel"
        username="rockstarsourav"
        verified={true}
        text="Wooh!!  #cleverprogrammer"
        avatar="https://media-exp1.licdn.com/dms/image/C5603AQHq3XqqAeGeMw/profile-displayphoto-shrink_100_100/0/1633071042847?e=1664409600&v=beta&t=FrJDEVG_BQNe-f1lIJ1MNvX8FT0fdGMJiY0wyZqqn4I"
        image="https://i.gifer.com/origin/2f/2f12d68190f054a8f43313fb9a2d4d0e.gif"
        />
    <Post 
        displayName="Vivek Kumar"
        username="velvrix"
        verified={true}
        text="What's up guys! #chillvibes 😎✌"
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFsPoPCK2Zcaw/profile-displayphoto-shrink_100_100/0/1623946739577?e=1664409600&v=beta&t=OZgQ8TdfCvMs7yxO2bLW3u_2cagG1QA5xFosO5xYre8"
        image="https://i.gifer.com/XOsX.gif"
        />
    <Post 
        displayName="Rohit Dubey"
        username="ind_dev_life"
        verified={true}
        text="You did itttttt!!!! Congratulation🎉"
        avatar="https://media-exp1.licdn.com/dms/image/C5603AQGstHFrTOgl2g/profile-displayphoto-shrink_100_100/0/1627012436766?e=1664409600&v=beta&t=3MEF6qq4jaxxX-mxuOZhvlEn0RAoiCQIsKwbos0i_fo"
        image="https://media3.popsugar-assets.com/files/2013/11/07/831/n/1922398/77fcf01ee44bc47e_32.gif"
        />
    <Post 
        displayName="Prateek Sikarwar"
        username="shan_onfire"
        verified={true}
        text="Its cool buddy keep it up  #twitterClone  #myfirsttweet #naruto 😂 #animelover"
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQHIw9iiyjdGUw/profile-displayphoto-shrink_100_100/0/1633092976702?e=1664409600&v=beta&t=vySZMHOKnlYakg99fmRTX_TesxD-KHIAE7ReLHDHHW8"
        image="https://i.gifer.com/Dtf.gif"
        />
    <Post 
        displayName="Shantanu Kumar"
        username="shan_onfire"
        verified={true}
        text="React is superduper awesome ✌✨😍 #react #firebase"
        avatar="https://media-exp1.licdn.com/dms/image/C4E03AQH0d1rHWRoBzg/profile-displayphoto-shrink_400_400/0/1633421762546?e=1664409600&v=beta&t=L4R3KVRNtJpXkZJS_0NZmCAKWMMqvyyr1Y9hiwhF0bU"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBU8m0OWRFhXeA5NZu5APR2EYITIkkBt451w&usqp=CAU"
        />
    <Post 
        displayName="Shantanu Kumar Kar"
        username="shan_onfire"
        verified={true}
        text="MERN development 😎 #mongoDB #express #react #node.js"
        avatar="https://media-exp1.licdn.com/dms/image/C4E03AQH0d1rHWRoBzg/profile-displayphoto-shrink_400_400/0/1633421762546?e=1664409600&v=beta&t=L4R3KVRNtJpXkZJS_0NZmCAKWMMqvyyr1Y9hiwhF0bU"
        image="https://www.nyusoft.com/services/images/mern-development/mern-dev-img.png"
        />
    <Post 
        displayName="Shantanu Kumar Kar"
        username="shan_onfire"
        verified={true}
        text="Keep learning keep growing All the best👍"
        avatar="https://media-exp1.licdn.com/dms/image/C4E03AQH0d1rHWRoBzg/profile-displayphoto-shrink_400_400/0/1633421762546?e=1664409600&v=beta&t=L4R3KVRNtJpXkZJS_0NZmCAKWMMqvyyr1Y9hiwhF0bU"
        image="https://c.tenor.com/FkNMgm4kNrsAAAAC/all-the-best.gif"
        />
    </div>
  )
}

export default Feed