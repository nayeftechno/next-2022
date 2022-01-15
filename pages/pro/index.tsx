import { useEffect } from 'react';
import RenderHead from "@/components/RenderHead";
import List from "@/components/List";
import Form from '@/components/Form';
import Statics from '@/components/Statics';
import { useEmployeeStore } from '@/contexts/EmployeeContext';
export default function ProPage(): JSX.Element {
    const { fetch } = useEmployeeStore();
    useEffect(() => {
        fetch();
    }, []);
    return (<>
        <RenderHead title="Pro" />
        <div className="row">
            <div className="col-md-4">
                <Statics />
            </div>
            <div className="col-md-4">
                <List />
            </div>
            <div className="col-md-4">
                <Form />
            </div>
        </div>
    </>);
};