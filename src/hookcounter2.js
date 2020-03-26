import React ,{useState} from 'react'
function FormData1(){
    const[name,setName]=useState({firstname:'',lastname:''})
    return(
        <form>
        <input type="text" value={name.firstname} 
        onChange={e=>{setName( { ...name,firstname:e.target.value} )}  }

        />
        <input type="text" value={name.lastname}
        onChange={ e=>{setName( { ...name,lastname:e.target.value   }    )}     }
        />
        <h2>your firstname--{name.firstname}</h2>
        <h2>your lastname--{name.lastname}</h2>
    <h2>{JSON.stringify(name)}</h2>

    
        </form>
    )




}
export default FormData1