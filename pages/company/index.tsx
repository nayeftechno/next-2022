import { useState, useEffect, useRef, memo } from 'react';
import useSWR, { useSWRConfig } from "swr";
import RenderHead from "../../components/RenderHead";

type IEmployee = {
    id?: number;
    name: string;
};

async function fetcher() {
    const response = await fetch('http://localhost:4000/employees');
    const employees = await response.json();
    return employees;
};

export default function CompanyPage(): JSX.Element {
    const inputRef = useRef(null);
    const [state, setState] = useState<IEmployee>({ name: '' });
    const { mutate } = useSWRConfig();
    const { data: employees, error } = useSWR('employees', fetcher);
    useEffect(() => {
        if (!inputRef.current) return;
        //@ts-ignore
        inputRef.current.focus();
    }, [employees]);
    if (error) { return <h4>Error</h4> };
    if (!employees) { return <h4>Loading...</h4> }
    return (<>
        <RenderHead title="Company" />
        <div className="row">
            <h4>Company Page</h4>
            <div className="col-md-6">
                <ul className="list-group">
                    {
                        employees.map(({ id, name }: any) => {
                            return (<li key={id} className="list-group-item">{name}</li>);
                        })
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input ref={inputRef} type={'text'} className='form-control' value={state.name} onChange={(e) => { setState({ ...state, name: e.target.value }) }} placeholder='type name...' />
                    </div>
                    <div className='form-group'>
                        <input type={'submit'} value={'Save'} className='btn btn-success' />
                    </div>
                </form>
            </div>
        </div>
    </>);
    function handleSubmit(e: any): void {
        e.preventDefault();
        fetch('http://localhost:4000/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        }).then((response) => { return response.json() }).then((response) => {
            if (response.id) {
                setState({ ...state, name: '' });
                mutate('employees');
            }
        }).catch((error) => { console.error(error) });
    }
};