import React,{useState, createContext} from 'react';

export const Context = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name : 'Harry Potter',
            price : '$18',
            id : 2314
        },
        {
            name : 'Intestellar',
            price : '$20',
            id : 6766
        },
        {
            name : 'Aladdin',
            price : '$31',
            id : 4788
        },
        {
            name : 'Big Hero 6',
            price : '$23',
            id : 3422
        }
    ]);

    return(
        <Context.Provider value={[movies, setMovies]}>
        {props.children}
        </Context.Provider>
    );
};