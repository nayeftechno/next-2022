// import CompanyStore from "../packages/web-sdk/src/stores/employee-store";
// import EmployeeStore from "../packages/web-sdk/src/stores/employee-store/employee.store";
// import { useStaticRendering } from 'mobx-react';

// // eslint-disable-next-line
// useStaticRendering(typeof window === 'undefined');

// const isSSR = (): boolean => typeof window === 'undefined';

// let store: any;

// type InitialState = {
//     SDK: EmployeeStore;
// };

// export class Store {
//     SDK;
//     constructor(initialState: Partial<InitialState>) {
//         this.SDK = new CompanyStore(initialState.SDK);
//         store = this;
//     }
// }

// export function initStore(initialData: Partial<InitialState> = {}): Store {
//     if (isSSR()) {
//         return new Store(initialData);
//     }

//     if (!store) {
//         store = new Store(initialData);
//     }

//     return store;
// }
export {};