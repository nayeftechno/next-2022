import useCounterHook from "@/hooks/useCounterHook";
export default function FirstComponent(){
    const [state,actions] = useCounterHook();
    return(<div>
        <h5>FirstComponent {state.counter}</h5>
        <button onClick={actions.increase}>Click</button>
    </div>);
};