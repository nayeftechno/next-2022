import useCounterHook from "@/hooks/useCounterHook";
export default function SecondComponent(){
    const [state,actions] = useCounterHook();
    return(<div>
        <h5>SecondComponent {state.counter}</h5>
        <button onClick={actions.increase}>Click</button>
    </div>);
};