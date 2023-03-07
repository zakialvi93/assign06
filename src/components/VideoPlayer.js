import { useEffect, useState } from "react";
import { videos } from "./videoData";
import { SelectedVideo } from "./SelectedVideo";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function VideoPlayer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(null);

  const initializeFunction = () => {
    const newArray = [];

    videos.map((x) => {
      console.log("ID->>", x.Id, "ID2==>", id);
      if (x.Id == id) {
        newArray.push(x);
      }
    });

    setData(newArray);
  };

  useEffect(() => {
    initializeFunction();
  }, []);

  return (
    <div
      style={{
        width: "100%",
         backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {data?.length ? (
          <>
            {data &&
              data?.map((video, index) => {
                return (
                  <SelectedVideo
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
              Such Video Does Not Exist
            </div>
          </>
        )}
      </div>
    </div>
  );
}
