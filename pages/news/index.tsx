import RenderHead from "../../components/RenderHead";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

type NewsPageState = {
    id?: number;
    title: string;
    description: string;
    category: string;
};

export default function NewsPage({ news }: any): JSX.Element {
    const [state, setState] = useState<NewsPageState>({ title: '', description: '', category: '' });
    const [News, SetNews] = useState([]);
    const inputRef = useRef(null);
    const { title, description, category } = state;
    const { replace, asPath, push } = useRouter();
    useEffect(() => {
        //@ts-ignore
        inputRef.current.focus();
        SetNews(news);
    }, [news]);
    const handleChange = (name: string, value: string): void => {
        switch (name) {
            case "title":
                setState({ ...state, title: value });
                return;
            case "category":
                setState({ ...state, category: value });
                return;
            case "description":
                setState({ ...state, description: value });
                return;
        };
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch('http://localhost:4000/news', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.id) {
                setState({
                    title: '',
                    category: '',
                    description: ''
                });
                refresh();
            }
        }).catch((error) => { console.error(error) });
    }
    const deleteArticle = (id: number): void => {
        fetch(`http://localhost:4000/news/${id}`, {
            method: "DELETE"
        }).then((response) => { return response.json(); }).then((response) => {
            if (response) {
                refresh();
            }
        }).catch((error) => { console.error(error) });
    };
    const refresh = (): void => {
        replace(asPath);
    };
    return (<>
        <RenderHead title="News" />
        <div className="row">
            <h4>News Page</h4>
            <table>
                <tr>
                    <td>
                        <button className="btn btn-success" onClick={() => push('news/sport')}>Sport</button>
                    </td>
                    <td>
                        <button className="btn btn-success" onClick={async () => {
                            const response = await fetch('http://localhost:4000/news?category=sport');
                            const news = await response.json();
                            SetNews(news);
                            push('/news?category=sport', undefined, { shallow: true });
                        }}>Client Side Filter</button>
                    </td>
                    <td>
                        <button className="btn btn-success" onClick={() => push('news/politics')}>Politics</button>
                    </td>
                </tr>
            </table>
            <div className="col-md-6">
                <ul className="list-group">
                    {
                        [...News].map(({ id, title, description, category }: any) => {
                            return (<li key={id} className="list-group-item">
                                <p>{title}</p>
                                <p>{description}</p>
                                <p>{category}</p>
                                <p onClick={() => { deleteArticle(id) }}>DELETE</p>
                                <p>{'*'.repeat(30)}</p>
                            </li>);
                        })
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input ref={inputRef} name="title" onChange={(e) => { handleChange(e.target.name, e.target.value) }} type={'text'} className="form-control" value={title} placeholder="type title..." />
                    </div>
                    <div className="form-group">
                        <input type={'text'} name="category" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control" value={category} placeholder="type category..." />
                    </div>
                    <div className="form-group">
                        <input type={'text'} name="description" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control" value={description} placeholder="type description..." />
                    </div>
                    <div className="form-group">
                        <input type={'submit'} value={'Add'} className="btn btn-success" />
                    </div>
                </form>
            </div>
        </div>
    </>);
};

export async function getServerSideProps(context: any) {
    const { query } = context;
    let url = '';
    if (query.category) {
        const { category } = query;
        url = `http://localhost:4000/news?category=${category}`;
    }
    else {
        url = 'http://localhost:4000/news';
    }
    const response = await fetch(url);
    const news = await response.json();
    return {
        props: {
            news
        }
    };
};