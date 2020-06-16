import React from 'react'

interface Props {
    title: string,
    content: string
}

/**
 * Functionnal react component for showing detail article
 * @component
 * @param {object} props - { title, content }
 * @returns {JSX.Element} - Render the title and content of an article
 */
const ArticleDetail: React.FC<Props> = ({ title, content }) => (
    <div data-test="ArticleDetail" className="article">
        <h1 data-test="ArticleDetail-title">{ title }</h1>
        <p data-test="ArticleDetail-content">{ content }</p>
    </div>
);

export default ArticleDetail