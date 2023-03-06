export function VideoThumbnail(props) {
    const colors = ['#24c6f2','#f2d724','#24f240','#f22424']
    return (
        <div style={{width:'1000px',height:'150px',backgroundColor:'white',margin:'5px',display:'flex'}}>
                    <div style={{backgroundColor:colors[Math.floor(Math.random() * colors.length)],margin:'5px',width:'200px',height:'70%'}}>

                    </div>

                    <div style={{padding:'5px'}}>

                        <div style={{fontWeight:'500',fontSize:'22px'}}>
                            {props.title}
                        </div>

                        <div style={{fontWeight:'400',fontSize:'18px'}}>
                            {props.channel}
                        </div>
                        
                        <div style={{fontWeight:'400',fontSize:'18px'}}>
                            {props.views}
                        </div>

                    </div>
        </div>
    )
}