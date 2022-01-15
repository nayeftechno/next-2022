import { observer } from 'mobx-react-lite';
function List({ store }: any): JSX.Element {
    const { getLoading, getEmployees } = store;
    return (<ul className="list-group">
        {
            getLoading && getEmployees.length === 0 ? (<li className="list-group-item">Loading...</li>) : (<>
                {
                    getEmployees.map(({ id, name, exist }: any) => {
                        return (<li key={id} className="list-group-item">{name}</li>);
                    })
                }
            </>)
        }
    </ul>);
};
export default observer(List);