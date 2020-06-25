import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../store/actions/article';
import { v4 as uuidv4 } from 'uuid';
import * as routes from '../Navigation/routes';

interface Props extends RouteComponentProps {};

const ArticleAdd: React.FC<Props> = ({ history }) => {

    const dispatch = useDispatch();
    //@ts-ignore
    const addDataToBDAndState = (article) => dispatch(addArticle(article));

    const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //@ts-ignore
        const { title, body } = event.target.elements;
        addDataToBDAndState({id: uuidv4(), title: title.value, body: body.value})

        history.replace(routes.ARTICLES_LIST);
    };


    return (
        <form onSubmit={submitFormHandler}>
            <label htmlFor="title">
                Titre:  
                <input type="text" name="title"/>
            </label>
            <br/>
            <br/>
            <label htmlFor="content">
                Contenu: 
                <textarea name="body" cols={30} rows={10}></textarea>
            </label>
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default ArticleAdd;