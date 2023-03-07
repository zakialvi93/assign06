export function SelectedVideo(props) {

  return (
    <>
      <div
        style={{
          width: "80%",
          alignSelf:'center',
          marginTop:"10%",
          backgroundColor: "#bdc2bc",
          boxShadow: '1px 1px 3px black',
          margin: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems:'center',
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            margin: "10px",
            width: "95%",
            height: "600px",
            borderRadius: "25px",
            backgroundImage: `url(${props.link})`,
            backgroundSize: "cover",
           // backgroundRepeat: "no - repeat",
          }}
        >
        </div>

        <div
          style={{
            padding: "5px",
            justifyContent: "center",
            width:'90%',
            alignSelf:'center',
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
