import RenderHead from "../../components/RenderHead";
import Link from "next/link";

export default function ProductsPage({ products }: any): JSX.Element {
    return (<>
        <RenderHead title="Products" />
        <div className="row">
            <h4>Products Page</h4>
            <div className="col-md-12">
                <ul className="list-group">
                    {
                        products.map(({ id, title, price, description }: any) => {
                            return (<li key={id}>
                                <p>{id}</p>
                                <p>{title}</p>
                                <p>{price}</p>
                                <p>{description}</p>
                                <p>
                                    <Link href={`/products/${id}`}>
                                        <a>details</a>
                                    </Link>
                                </p>
                                <p>{'#'.repeat(30)}</p>
                            </li>);
                        })
                    }
                </ul>
            </div>
        </div>
    </>);
};

export async function getStaticProps(context: any) {
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    return {
        props: {
            products
        },
        revalidate : 1
    };
};