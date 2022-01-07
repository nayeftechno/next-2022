import RenderHead from "../../components/RenderHead";
import Link from "next/link";

export default function PostsPage({ posts }: any): JSX.Element {
    return (<>
        <RenderHead title="Posts" />
        <div className="row">
            <h4>Posts Page</h4>
            <div className="col-md-12">
                <ul className="list-group">
                    {
                        posts.map(({ id, title, body }: any) => {
                            return (<li key={id} className="list-group-item">
                                <p>{title}</p>
                                <p>{body}</p>
                                <p>
                                    <Link href={`/posts/${id}`}>
                                        <a>details....</a>
                                    </Link>
                                </p>
                            </li>);
                        })
                    }
                </ul>
            </div>
        </div>
    </>);
};

export async function getStaticProps(ctx: any) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return {
        props: {
            posts: [...posts].slice(0, 3)
        }
    };
}