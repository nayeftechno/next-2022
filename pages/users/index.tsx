import RenderHead from "../../components/RenderHead";
export default function UsersPage({ users }: any): JSX.Element {
    return (<>
        <RenderHead title="Users" />
        <div className="row">
            <h4>Users Page</h4>
            <div className="col-md-12">
                <ul className="list-group">
                    {
                        users.map((user: any) => {
                            const { id, name, username, email } = user;
                            return (<li key={id} className="list-group-item">{email}</li>);
                        })
                    }
                </ul>
            </div>
        </div>
    </>);
}
export async function getStaticProps(context: any) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: [] = await response.json();
    return {
        props: {
            users
        }
    };
}