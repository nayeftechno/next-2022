import { observer } from 'mobx-react-lite';

function Statics({ store }: any): JSX.Element {
    const { getTotal, getExists, getNotExists } = store;
    console.log(getTotal);
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h6>Total : {getTotal}</h6>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <h6>Exists : {getExists}</h6>
            <h6>{' '}&nbsp;&nbsp;||{' '}&nbsp;&nbsp;</h6>
            <h6>NotExists : {getNotExists}</h6>
        </div>
    </div>);
};
export default observer(Statics);