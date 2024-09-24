//import './css/style.css'

//hopk useStare()
import {useState} from 'react'
import {Button} from 'react-bootstrap'




function Addpage(){
     //usestate Variable
     const [num1,setNum1]=useState(0)
     const [num2,setNum2]=useState(0)
 
 
    return(
        <>
        <form >
            <h1>Addition</h1>
        <input  onChange={(e)=>
            {setNum1(e.target.value)}
        }
         className='text' type="number" name='numi' placeholder='enter first number'></input><br></br>
        <input onChange={(e)=>
        {setNum2(e.target.value)}}
         className='text' type="number" name='num2' placeholder='enter second number'></input><br></br>

        <Button 
        variant="danger"
        onClick={(e)=>
            {let sum 
                sum=Number(num1)+Number(num2)
                alert(sum)
            }
        }
         className='button'>Add</Button>
         
        </form>
        </>
    )
}

export default Addpage