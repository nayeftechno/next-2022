import {IEmployee} from '@/SimpleStore/IEmployee';
import { observer } from 'mobx-react-lite';
import {useEmployeeStore} from '@/contexts/EmployeeContext';
function List(): JSX.Element {
    const { getLoading, getEmployees, getAdding, deleteEmployee ,setChecked} = useEmployeeStore();
    return (<ul className="list-group">
        {
            getLoading && getEmployees.length === 0 ? (<li className="list-group-item">Loading...</li>) : (<>
                {
                    getEmployees.map(({ id, name, exist }: IEmployee) => {
                        return (<li key={id} className="list-group-item">
                            <span>{id} - {name}</span>
                            <div style={{ float: 'right', display: 'flex', alignItems: 'center' ,width:60,justifyContent:'space-between'}}>
                                <div>
                                    <input type={'checkbox'} checked={exist} onChange={() => { setChecked({id , name,exist}) }} />
                                </div>
                                <div>||</div>
                                <div>
                                    <a style={{ cursor: 'pointer' }} onClick={() => { deleteEmployee({ id , name,exist}) }}>X</a>
                                </div>
                            </div>
                        </li>);
                    })
                }
                {
                    getAdding ? (<li className='list-group-item' style={{ textAlign: 'center' }}>
                        Adding...
                    </li>) : (null)
                }
            </>)
        }
    </ul>);
};
export default observer(List);