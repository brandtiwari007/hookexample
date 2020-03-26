import React ,{useState} from 'react'
function HookCounter(){
    const initialcount=0;
   const[count,setCount]=useState(initialcount)



    return(
<div>
<button onClick={()=> setCount(initialcount) }>Reset </button>
<button onClick={()=>setCount(count+1)} >increment</button>
<button onClick={ ()=>setCount(count-1)  }>decrement</button>

<h1>{count}</h1>

</div>


    )
}

export default HookCounter