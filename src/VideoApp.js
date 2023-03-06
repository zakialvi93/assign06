import { videos } from "./VideoData";
import { HomeThumbnail } from "./HomeThumbnail";

export function VideoApp() {
    
    return (
        <div style={{
            width: '100%', height: '100%', backgroundColor: 'black', display: 'flex',
            flexDirection: 'column'
        }}>
            
            
            <div style={{display:'flex', flexWrap: 'wrap' }}>
            {videos.map((video, index) => {
                return <HomeThumbnail title={video.title} channel={video.channel} views={video.views} key={index}/>
            })}    
            </div>
            
        </div>
    );
}