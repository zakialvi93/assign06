import React, { useState } from "react";
import { VideoApp } from "./VideoApp";
import { videos } from "./VideoData";
import { VideoThumbnail } from "./VideoThumbnail";


function VideoSearch() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();

    const filteredData = videos.filter((video) =>
      video.title.toLowerCase().includes(query)
    );

    setSearchResults(filteredData);
    setSearchQuery(query);
  };

  return (
    <div style={{backgroundColor:"black"}}>
      {/* Search input */}
      <input type="text" value={searchQuery} onChange={handleSearch} style={{width:'80%',height:'30px'}} />
      
      {/* Search results */}
      {searchResults ? (
        <>
          <button style={{height:'40px'}} onClick={() => setSearchResults(null)}>Back</button>
          {searchResults.length > 0 ? (
            <ol style={{listStyle:"none"}}>
              {searchResults.map((video, index) => (
                <li key={index}> {<VideoThumbnail title={video.title} channel={video.channel} views={video.views}/>}</li>
              ))}
            </ol>
          ) : (
            <div style={{backgroundColor:"black", width:"100%", height:"100%"}}>
              <br/>
              <h1 style={{color:"white"}}>No Data Found</h1>
            </div>
          )}
        </>
      ) : (
        <VideoApp/>
      )}
    </div>
  );
}

export default VideoSearch;
