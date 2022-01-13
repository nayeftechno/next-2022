import {useState} from 'react';
const withCounter=(Component : any)=>(props : any)=>{
    const[counter,setCounter] = useState(0);
    function increase():void{
        setCounter(counter + 1);
    };
    return(<Component 
        {...props}
        counter={counter}
        increase={increase}
        />);
};
export default withCounter;