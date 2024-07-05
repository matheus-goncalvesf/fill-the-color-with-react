import { useState } from 'react'
import './App.css'

function Box(){
    const [icolor, setIcolor] = useState ("")

    const getColorName = (e) => {
        setIcolor(e.target.value)

    }
    
    return(
        <>
        <div className="container">
        <div className="color-box"
             style={{
                backgroundColor: `${icolor ? icolor : "white" }`,
                }}>

        </div>
        
        <input className="input" type="text" placeholder='type a color' onChange={getColorName} >
        
        </input>


        </div>
        
        </>
    )

} 

export default Box