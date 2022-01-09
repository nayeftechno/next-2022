import RenderHead from "../../components/RenderHead";
import { useRouter } from 'next/router';

export default function ProductDetails({ product }: any): JSX.Element {
    const { isFallback, push } = useRouter();
    if (isFallback) {
        return (<div className="row">
            <h4>Loading.....</h4>
        </div>);
    }
    if (Object.keys(product).length === 0) {
        return (<div className="row">
            <h4>No Such Product</h4>
        </div>);
    }
    const { id, title, price, description } = product;
    return (<>
        <RenderHead title={`${title}`} />
        <div className="row">
            <button className="btn btn-primary" onClick={() => { push('/products') }}>Back</button>
            <div className="col-md-12">
                <p>{id}</p>
                <p>{title}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </div>
    </>);
};

export async function getStaticPaths() {
    const paths = [
        { params: { productId: "1" } }
    ];
    return {
        paths,
        fallback: true
    };
};

export async function getStaticProps(context: any) {
    const { params: { productId } } = context;
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    return {
        props: {
            product
        },
        revalidate: 1
    };
};