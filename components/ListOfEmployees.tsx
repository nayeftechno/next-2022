export default function ListOfEmployees({ employees }: any): JSX.Element {
  return (
    <ul className="list-group">
      {employees.map(({ id, name }: any) => {
        return (
          <li className="list-group-item" key={id}>
            {id} - {name}
            <span></span>
          </li>
        );
      })}
    </ul>
  );
}
