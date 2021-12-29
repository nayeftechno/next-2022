import { EmployeeClient } from '../../clients/employee.client';
import { observable, action, computed } from 'mobx';
import { flow, mapInitialStateToStoreState } from './store.utils';
import { EmployeeParams } from './Employee.types';
import { APIErrorHandler } from './store.types';

type InitialState = Partial<EmployeeStore>;

export interface ResponseGenerator {
    employees: any,
}

type FetchParams = {
    payload: EmployeeParams;
    errorHandler: APIErrorHandler;
};

class EmployeeStore {

    constructor(initialState: InitialState = {}) {
        this.updateInitialState(initialState);
    };

    @observable employees: any = [];

    @observable loading = false;

    @observable error = '';

    @computed get getLoading(): boolean {
        return this.loading;
    };

    @computed get getEmployees(): any[] {
        return this.employees;
    };

    @action updateInitialState(initialState: InitialState): void {
        mapInitialStateToStoreState(this, initialState);
    };

    * fetch() {
        try {
            this.loading = true;
            const response: ResponseGenerator = yield EmployeeClient.getEmployees();
            this.employees = response;
            this.loading = false;
            this.error = '';

        } catch (error) {
            this.loading = false;
            this.error = JSON.stringify(error);
        }
    }

    // fetch = flow(function*(
    //     this: EmployeeStore,
    //     { payload, errorHandler = () => null }: FetchParams = {} as FetchParams,
    //   ) {
    //     this.loading = true;
    //     try {
    //       const response = yield EmployeeClient.getEmployees();
    //       this.employees = response;
    //       this.loading = false;
    //     } catch (error) {
    //       this.loading = false;
    //       this.employees = [];
    //       this.error = JSON.stringify(error);
    //     }
    //   });
};

export default EmployeeStore;