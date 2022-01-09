import RenderHead from "../../components/RenderHead";
import Link from "next/link";

export default function PostsPage({ products }: any): JSX.Element {
    return (<>
        <RenderHead title="Posts" />
        <div className="row">
            <h4>Posts Page</h4>
            <div className="col-md-12">
                <ul className="list-group">
                    {
                        products.map(({ id, title,price,description }: any) => {
                            return (<li key={id} className="list-group-item">
                                <p>{id}</p>
                                <p>{title}</p>
                                <p>{price}</p>
                                <p>{description}</p>
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
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    return {
        props: {
            products
        },
        revalidate : 1
    };
}