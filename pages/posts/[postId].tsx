import RenderHead from "../../components/RenderHead";
import Link from "next/link";
import {useRouter} from 'next/router';

export default function PostDetailsPage({ post }: any): JSX.Element {
    //const {isFallback} = useRouter();
    // if(isFallback){
    //     return(<h1>LOADING....</h1>);
    // }
    const {id,title,body} = post;
    return (<>
        <RenderHead title={`Post Details ${id}`} />
        <div className="row">
            <Link href={'/posts'}>
                <a>back...</a>
            </Link>
            <h4>Post Details Page {id}</h4>
            <div className="col-md-12">
                <p>{title}</p>
                <p>{body}</p>
            </div>
        </div>
    </>);
};
export async function getStaticPaths() {
    const paths = [
        { params: { postId: "1" } },
        { params: { postId: "2" } },
        { params: { postId: "3" } }
    ];
    return {
        paths,
        fallback : 'blocking'
    };
};
export async function getStaticProps(context: any) {
    const { params: { postId } } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    if(!post.id){
        return{
            notFound : true
        };
    }
    return {
        props: {
            post
        }
    };
};