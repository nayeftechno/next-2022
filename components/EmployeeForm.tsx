import { useState, useRef, useEffect } from 'react';
import { IEmployee } from '../interfaces/IEmployee';

type AddEmployeeForm = {
    addEmployee: (arg0: object, callback: Function) => void;
};

function EmployeeForm({ addEmployee }: AddEmployeeForm): JSX.Element {
    const nameInputRef = useRef(null);
    const [state, setState] = useState<IEmployee>({ id: 0, name: '', disabled: false });
    useEffect(() => {
        //@ts-ignore
        nameInputRef.current.focus();
    }, []);
    async function handleSubmit(e: any) {
        e.preventDefault();
        const { name } = state;
        setState({ ...state, disabled: true });
        await addEmployee({ name }, () => {
            setState({ ...state, disabled: false, name: '' });
            //@ts-ignore
            nameInputRef.current.focus();
        });
    }
    const { disabled, name } = state;
    return (<form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input ref={nameInputRef} type={'text'} value={name} onChange={(e) => { setState({ ...state, name: e.target.value }) }} className='form-control' placeholder='type name...' />
        </div>
        <div className='form-group'>
            <input type={'submit'} value={'Save'} className='btn btn-success' disabled={disabled} />
        </div>
    </form>);
};

export default EmployeeForm;
