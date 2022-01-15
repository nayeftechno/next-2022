import { useEffect } from 'react';
import RenderHead from "@/components/RenderHead";
import EmployeeStore from "@/SimpleStore/EmployeeStore";
import List from "@/components/List";
import Form from '@/components/Form';
import Statics from '@/components/Statics';
export default function ProPage(): JSX.Element {
    useEffect(() => {
        EmployeeStore.fetch();
    }, []);
    return (<>
        <RenderHead title="Pro" />
        <div className="row">
            <div className="col-md-4">
                <Statics store={EmployeeStore}/>
            </div>
            <div className="col-md-4">
                <List store={EmployeeStore} />
            </div>
            <div className="col-md-4">
                <Form store={EmployeeStore}/>
            </div>
        </div>
    </>);
};