import { createContext, useState } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    return (
        <FilmContext.Provider value={{ searchTerm, setSearchTerm, sortOption, setSortOption }}>
            {children}
        </FilmContext.Provider>
    );
};