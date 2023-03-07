import { useNavigate } from "react-router-dom";

export function VideoThumbnail(props) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/Video/${props.Id}`)}
        style={{
          width: "80%",
          backgroundColor: "#bdc2bc",
          boxShadow: "1px 1px 3px black",
          margin: "5px",
          display: "flex",
          flexDirection: "row",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            margin: "10px",
            width: "200px",
            height: "125px",
            borderRadius: "25px",
            backgroundImage: `url(${props.link})`,
            backgroundSize: "cover",
            backgroundRepeat: "no - repeat",
          }}
        ></div>

        <div
          style={{
            padding: "5px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontWeight: "500", fontSize: "22px" }}>
            {props.title}
          </div>
          <div style={{ fontWeight: "400", fontSize: "18px" }}>
            {props.channel}
          </div>
          <div style={{ fontWeight: "400", fontSize: "18px" }}>
            {props.views}
          </div>
        </div>
      </div>
    </>
  );
}
