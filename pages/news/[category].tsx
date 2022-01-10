import RenderHead from "../../components/RenderHead";
import Link from "next/link";

export default function CategoryPage({ news, category }: any): JSX.Element {
    return (<>
        <RenderHead title="Category" />
        <div className="row">
            <h4>News For {category} Category</h4>
            <Link href={'/news'}>
                <a>Back</a>
            </Link>
            <ul className="list-group">
                {
                    news.map(({ id, title, description, category }: any) => {
                        return (<li key={id} className="list-group-item">
                            <p>{title}</p>
                            <p>{description}</p>
                            <p>{category}</p>
                            <p>{'*'.repeat(30)}</p>
                        </li>);
                    })
                }
            </ul>
        </div>
    </>);
};

export async function getServerSideProps(context: any) {
    const { params: { category } } = context;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const news = await response.json();
    return {
        props: {
            news,
            category
        }
    };
};