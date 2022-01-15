import { useState, useEffect, useRef } from 'react';
import { IEmployee } from '@/SimpleStore/IEmployee';
import { observer } from 'mobx-react-lite';
import {useEmployeeStore} from '@/contexts/EmployeeContext';
function Form(): JSX.Element {
    const { getAdding, addEmployee } = useEmployeeStore();
    const inputRef = useRef(null);
    const [state, setState] = useState<IEmployee>({ name: '', exist: false });
    useEffect(() => {
        //@ts-ignore
        inputRef.current.focus();
    }, []);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        addEmployee(state);
        setState({ ...state, name: '' });
        //@ts-ignore
        inputRef.current.focus();
    };
    return (<form onSubmit={handleSubmit}>
        <div className="form-group">
            <input ref={inputRef} className='form-control' value={state.name} onChange={(e) => { setState({ ...state, name: e.target.value }) }} placeholder='type name...' />
        </div>
        <div className="form-group">
            <input type={'submit'} value={'Save'} disabled={getAdding} className='btn btn-success' />
        </div>
    </form>);
};
export default observer(Form);