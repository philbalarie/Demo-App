import React from 'react';
import Article from '../../article.model';

/**
 * Functionnal react component for showing detail article
 * @component
 * @param {Article} props - { title, body }
 * @returns {JSX.Element} - Render the title and body of an article
 */
const ArticleDetail: React.FC<Article> = ({ title, body }) => (
    <div data-test="ArticleDetail" className="article">
        <h1 data-test="ArticleDetail-title">{ title }</h1>
        <p data-test="ArticleDetail-body">{ body }</p>
    </div>
);

export default ArticleDetail