import React from 'react'

interface Props {
    title: string,
    content: string
}

const ArticleDetail: React.FC<Props> = ({ title, content }) => (
    <div className="article">
        <h1>{ title }</h1>
        <p>{ content }</p>
    </div>
);

export default ArticleDetail