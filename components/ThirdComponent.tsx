import useCounterHook from "@/hooks/useCounterHook";
export default function ThirdComponent(){
    const [state,actions] = useCounterHook();
    return(<div>
        <h5>ThirdComponent {state.counter}</h5>
        <button onClick={()=>{actions.toggleVisible(true)}}>{JSON.stringify(state.visible)}</button>
    </div>);
};