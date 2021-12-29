import {action} from 'mobx';
import EmployeeStore from "./employee.store";
import { mapInitialStateToStoreState } from './store.utils';

type InitialState = Partial<{
    employee : EmployeeStore;
  }>;

class EmployeePageStore{
    
    employee : EmployeeStore;
    
    constructor(initialState: InitialState = {}){
        this.updateInitialState(initialState);
        this.employee = new EmployeeStore(initialState.employee);
    }
    
    @action updateInitialState(initialState: InitialState): void {
        mapInitialStateToStoreState(this, initialState);
    };

};
export default EmployeePageStore;