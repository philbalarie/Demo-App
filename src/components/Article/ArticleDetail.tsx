import React from 'react';
import Article from '../../article.model';

/**
 * Functionnal react component for showing detail article
 * @component
 * @param {Article} props - { title, content }
 * @returns {JSX.Element} - Render the title and content of an article
 */
const ArticleDetail: React.FC<Article> = ({ title, content }) => (
    <div data-test="ArticleDetail" className="article">
        <h1 data-test="ArticleDetail-title">{ title }</h1>
        <p data-test="ArticleDetail-content">{ content }</p>
    </div>
);

export default ArticleDetail