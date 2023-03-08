import { useState } from "react";
import { videos } from "./videoData";
import { VideoThumbnail } from "./VideoThumbnail";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const checkFunction = () => {
    if (searchValue.length) {
      navigate(`/Search?q=${searchValue}`);
    } else {
      alert("Please enter something in the search field!");
    }
  };

  return (
    <div
      style={{
        width: "100%",
         backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "10px",
          width: "800px",
        }}
      >
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ width: "85%", height: "30px", borderRadius: "5px" }}
          placeholder="Search..."
        />
        <button
          onClick={checkFunction}
          style={{ height: "30px", marginLeft: "10px", borderRadius: "5px" }}
        >
          Search
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "row", flexWrap:"wrap", width: "100%" }}>
        {videos &&
          videos.map((video, index) => {
            return (
              <VideoThumbnail
                title={video.title}
                channel={video.channel}
                views={video.views}
                link={video.link}
                key={index}
                Id={video.Id}
              />
            );
          })}
      </div>
    </div>
  );
}
