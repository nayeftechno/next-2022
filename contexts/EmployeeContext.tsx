import { createContext, ReactNode, useContext } from 'react';
import EmployeeStore from '@/SimpleStore/EmployeeStore';

const EmployeeContext = createContext<EmployeeStore>(new EmployeeStore());

type EmployeeContextProps = {
    store: EmployeeStore,
    children: ReactNode
};

function EmployeeContextProvider({ store, children }: EmployeeContextProps): JSX.Element {
    return (<EmployeeContext.Provider value={store}>
        {children}
    </EmployeeContext.Provider>);
};

function useEmployeeStore() {
    return (useContext(EmployeeContext));
};

export {
    EmployeeContextProvider,
    useEmployeeStore
};