import { useAppDispatch, useAppSelector } from "../../app/hook";
import { decrement, increase, increment } from "../../slices/Counter";

const Counter = () => {
    const dispatch = useAppDispatch();
    const {count}   = useAppSelector((state: any) => state.counter);
    // console.log(count);
    
    return (
        <div>
            Value: {count}
            <button className="p-2" onClick={() => dispatch(increment())}>Click 1</button>
            <button className="p-2" onClick={() => dispatch(decrement())}>Click 2</button>
            <button className="p-2" onClick={() => dispatch(increase(30))}>Click 3</button>
        </div>
    );
};

export default Counter;