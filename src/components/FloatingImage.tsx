type ImageProps = {
    src:string
    x:number
    y:number
    rotate:number
    width:number
}

//Polaroid style background images

export const FloatingImage = ({ src,x,y,rotate,width }:ImageProps) =>{

    return(
        <div className='absolute max-w-none fade bg-white p-[1rem] pb-[2.5rem] shadow-[0_0.5rem_1rem_0_rgba(0,0,0,0.5)] rounded-sm' 
            style={{ 
                top: `${y}rem`, 
                left: `${x}rem`, 
                transform: `rotate(${rotate}deg)`,
                width: `${width}rem`
            }}>
            <img src={src} 
                style={{
                    width:`${width}rem`,
                    height:`auto`,
                    zIndex: 0,
                    
                }}
            />
        </div>
    )
}

