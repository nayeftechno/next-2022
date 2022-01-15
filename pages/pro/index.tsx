import { useEffect } from 'react';
import RenderHead from "@/components/RenderHead";
import EmployeeStore from "@/SimpleStore/EmployeeStore";
import List from "@/components/List";
export default function ProPage(): JSX.Element {
    useEffect(() => {
        EmployeeStore.fetch();
    }, []);
    return (<>
        <RenderHead title="Pro" />
        <div className="row">
            <h4>Pro Page</h4>
            <div className="col-md-4">Statics</div>
            <div className="col-md-4">
                <List store={EmployeeStore} />
            </div>
            <div className="col-md-4">Form</div>
        </div>
    </>);
};