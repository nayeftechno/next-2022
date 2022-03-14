import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ListOfEmployees from "@/components/ListOfEmployees";
import AddEmployeeForm from "@/components/AddEmployeeForm";

const IndexPage: NextPage = (): JSX.Element => {
  const [State, SetState] = useState({
    isLoading: false,
    employees: [],
  });

  useEffect(() => {
    async function getEmployees() {
      SetState({ ...State, isLoading: true });
      const response = await fetch("http://localhost:4000/employees");
      const employees = await response.json();
      SetState({
        isLoading: false,
        employees,
      });
    }
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, employees } = State;

  return (
    <div className="row">
      <h4>Without SWR</h4>
      <div className="col-md-4">
        {isLoading && !employees.length && <h4>Loading....</h4>}
        {!isLoading && employees.length && (
          <ListOfEmployees employees={employees} />
        )}
      </div>
      <div className="col-md-2">
          <AddEmployeeForm/>
      </div>
    </div>
  );
};

export default IndexPage;
