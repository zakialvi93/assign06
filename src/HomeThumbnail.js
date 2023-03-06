export function HomeThumbnail(props) {
    const colors = ['#24c6f2','#f2d724','#24f240','#f22424']
    return (
        <div style={{width:'300px',height:'300px',backgroundColor:'#fff',margin:'5px',display:'flex',flexDirection:'column'}}>
            <div style={{backgroundColor:colors[Math.floor(Math.random() * colors.length)],margin:'5px',width:'97%',height:'70%'}}>
                
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