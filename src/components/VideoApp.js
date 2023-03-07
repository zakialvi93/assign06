import { useState } from "react";
import { videos } from "./videoData";
import { VideoThumbnail } from "./VideoThumbnail";

export function VideoApp() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(videos);

  const checkFunction = () => {
    const newArray = [];

    videos.map((x) => {
      if (
        searchValue.replace(/\s+/g, "").toLowerCase() ==
          x.title.replace(/\s+/g, "").toLowerCase() ||
        x.title
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(searchValue.replace(/\s+/g, "").toLowerCase())
      ) {
        newArray.push(x);
      }
    });

    setData(newArray);
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
          style={{ width: "50%", height: "30px", borderRadius: "5px" }}
        />
        <button
          onClick={checkFunction}
          style={{ height: "30px", marginLeft: "10px", borderRadius: "5px" }}
        >
          Search
        </button>

        <button
          onClick={() => {
            setData(videos);
            setSearchValue("");
          }}
          style={{ height: "30px", marginLeft: "10px", borderRadius: "5px" }}
        >
          Reset
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {data.length > 0 ? (
          <>
            {data &&
              data.map((video, index) => {
                return (
                  <VideoThumbnail
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                    link={video.link}
                    key={index}
                  />
                );
              })}
          </>
        ) : (
          <>
            <div
              style={{
                fontWeight: "500",
                fontSize: "22px",
                marginLeft: "30%",
                marginTop: "20px",
              }}
            >
              No Search Results!
            </div>
          </>
        )}
      </div>
    </div>
  );
}
