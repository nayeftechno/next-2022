import { memo } from 'react';
import Head from 'next/head';

type RenderHeadProps = {
    title: string;
};

function RenderHead({ title }: RenderHeadProps): JSX.Element {
    return (<Head>
        <title>{title} Page</title>
    </Head>);
};

export default memo(RenderHead);