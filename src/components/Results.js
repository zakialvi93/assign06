import { useEffect, useState } from "react";
import { videos } from "./videoData";
import { VideoThumbnail } from "./VideoThumbnail";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Results() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q"));
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const q = searchParams.get("q");

  const initializeFunction = () => {
    const newArray = [];

    videos.map((x) => {
      if (
        q.replace(/\s+/g, "").toLowerCase() ==
          x.title.replace(/\s+/g, "").toLowerCase() ||
        x.title
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(q.replace(/\s+/g, "").toLowerCase())
      ) {
        newArray.push(x);
      }
    });

    setData(newArray);
  };

  const navigateFunction = () => {
    if (searchValue.length) {
      navigate(`/Search?q=${searchValue}`);
    } else {
      alert("Search field in empty!");
    }
  };

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

    navigateFunction();
  };

  useEffect(() => {
    initializeFunction();
  }, []);

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
          onClick={() => navigate("/")}
          style={{ height: "30px", marginLeft: "10px", borderRadius: "5px" }}
        >
          Back
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "100%", backgroundColor:"black"}}>
        {data?.length > 0 ? (
          <>
            {data &&
              data?.map((video, index) => {
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
          </>
        ) : (
          <>
            <div
              style={{
                fontWeight: "500",
                fontSize: "22px",
                marginLeft: "30%",
                marginTop: "20px",
                color:"white"
              }}
            >
              This Video does not exist!
            </div>
          </>
        )}
      </div>
    </div>
  );
}
