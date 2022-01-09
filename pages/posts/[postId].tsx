import RenderHead from "../../components/RenderHead";
import Link from "next/link";
import {useRouter} from 'next/router';

export default function PostDetailsPage({ product }: any): JSX.Element {
    const {isFallback} = useRouter();
    if(isFallback){
        return(<h1>LOADING....</h1>);
    }
    if(Object.keys(product).length === 0){
        return(<div className="row">
            <h4>No Such Record</h4>
        </div>);
    }
    const {id,title,price,description} = product;
    return (<>
        <RenderHead title={`Post Details ${id}`} />
        <div className="row">
            <Link href={'/posts'}>
                <a>back...</a>
            </Link>
            <h4>Post Details Page {id}</h4>
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
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    const paths = products.map(({id} : any)=>{
        return {
            params : {postId : String(id)}
        };
    });
    return {
        paths,
        fallback : true
    };
};
export async function getStaticProps(context: any) {
    const { params: { postId } } = context;
    const response = await fetch(`http://localhost:4000/products/${postId}`);
    const product = await response.json();
    return {
        props: {
            product
        },
        revalidate : 1
    };
};