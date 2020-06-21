import React from 'react';
import * as routes from './routes';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
    <nav>
        <ul>
            <li><Link to={routes.ARTICLES_LIST}>Liste d'articles</Link></li>
            <li><Link to={routes.ADD_ARTICLE}>Ajouter un article</Link></li>

        </ul>
    </nav>
);

export default Navigation;