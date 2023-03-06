import React from 'react';
import {useNavigate} from "react-router-dom"
import { VideoApp } from './VideoApp';
import { HomeThumbnail } from './HomeThumbnail';
import { videos } from './VideoData';
  
const Home = () => {
  const navigate = useNavigate();
    
  return (
    //   <>
    //     <h1>Welcome to Home Page</h1>
    //     <button onClick={()=>navigate("/about")}>About</button>
    //     <button onClick={()=>navigate("/videoapp")}>Video App</button>
    //   </>

    <div style={{
        width: '100%', height: '100%', backgroundColor: 'black', display: 'flex',
        flexDirection: 'column'
    }}>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/videosearching")}>Video Searching</button>
        <div style={{display:'flex', flexWrap: 'wrap' }}>
        {videos.map((video, index) => {
            return <HomeThumbnail title={video.title} channel={video.channel} views={video.views} key={index}/>
        })}    
        </div>
        
    </div>
  )
};
  
export default Home;