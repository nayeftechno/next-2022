import type { NextPage } from "next";
import useSWR from "swr";
import ListOfEmployees from "@/components/ListOfEmployees";
import AddEmployeeForm from "@/components/AddEmployeeForm";

async function fetcher() {
  const response = await fetch("http://localhost:4000/employees");
  const employees = await response.json();
  return employees;
}

const IndexPage: NextPage = (): JSX.Element => {
  const { data: employees, error } = useSWR("/api/employees", fetcher);

  return (
    <div className="row">
      <h4>With SWR</h4>
      <div className="col-md-4">
        {error && <h4>Error</h4>}
        {!employees?.length && <h4>Loading...</h4>}
        {employees?.length && <ListOfEmployees employees={employees} />}
      </div>
      <div className="col-md-2">
        <AddEmployeeForm />
      </div>
    </div>
  );
};

export default IndexPage;
