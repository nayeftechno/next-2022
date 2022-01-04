export default function UsersList({ users }: any): JSX.Element {
    return (<ul className="list-group">
        {
            users.map((user: any, index : number) => {
                const { id, name, username, email } = user;
                return (<li key={id} className="list-group-item">{index + 1} - {email}</li>);
            })
        }
    </ul>);
};