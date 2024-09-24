import { useState } from "react";
import {Button} from 'react-bootstrap'
function Area(){
    const [num1,setNum1]=useState(0)
    return(
        <>
        <form>
        <h1>Area</h1>
        <input  onChange={(e)=>
            {setNum1(e.target.value)}
        }
         className='text' type="number" name='num1' placeholder='enter the radius'></input><br></br>

<Button 
        variant="primary"
        onClick={(e)=>
            {let area
                area=3.14*(Number(num1)**2)
                alert(area)
            }
        }
         className='button'>give result</Button>
        </form>
        </>
    )
}

export default Area