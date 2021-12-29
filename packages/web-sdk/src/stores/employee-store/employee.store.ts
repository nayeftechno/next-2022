import { EmployeeClient } from '../../clients/employee.client';
import { observable, action, computed } from 'mobx';
import { mapInitialStateToStoreState } from './store.utils';

type InitialState = Partial<EmployeeStore>;

export interface ResponseGenerator {
    employees: any,
}

class EmployeeStore {

    constructor(initialState: InitialState = {}) {
        this.updateInitialState(initialState);
    };

    @observable
    private employees: any = [];

    @observable
    private loading = false;

    @observable
    private error = '';

    @computed
    get getLoading(): boolean {
        return this.loading;
    };

    @computed
    get getEmployees(): any[] {
        return this.employees;
    };

    @computed
    get getEror(): string {
        return this.error;
    };

    @action
    public updateInitialState(initialState: InitialState): void {
        mapInitialStateToStoreState(this, initialState);
    };

    public * fetch() {
        try {
            this.loading = true;
            const response: ResponseGenerator = yield EmployeeClient.getEmployees();
            this.employees = response.employees;
            this.loading = false;
            this.error = '';

        } catch (error) {
            this.loading = false;
            this.employees = [];
            this.error = JSON.stringify(error);
        }
    }

};

export default EmployeeStore;