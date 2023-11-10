import { createContext, useState } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [showSurvey, setShowSurvey] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');

    return (
        <FilmContext.Provider value={{ searchTerm, setSearchTerm, sortOption, setSortOption, showSurvey, setShowSurvey, comment, setComment, rating, setRating }}>
            {children}
        </FilmContext.Provider>
    );
};