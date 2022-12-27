import { useParams, Link } from 'react-router-dom';

// import './singleCharPage.scss';

import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useMarvelService from '../../services/MarvelService';

const SingleComicPage = () => {
    const {charId} = useParams();

    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [charId]);

    const updateComic = () => {
        clearError();
        getCharacter(charId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (char) => {
        setChar(char);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/>: null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({char}) => {
    const {title, description, pageCount, thumbnail, language, price} = char

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link
                to="/comics"
                onClick={() => {window.location.href="/comics"}}
                className="single-comic__back">Back to all</Link>
        </div>

    )
}

export default SingleComicPage;