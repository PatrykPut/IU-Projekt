import { createContext, useState } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [showRatingSurvey, setShowRatingSurvey] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');
    const [showFilmSurvey, setShowFilmSurvey] = useState(false);
    const [name, setName] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [director, setDirector] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');


    return (
        <FilmContext.Provider value={{ searchTerm, setSearchTerm, sortOption, setSortOption, showRatingSurvey, setShowRatingSurvey, comment, setComment, rating, setRating,
        showFilmSurvey, setShowFilmSurvey, name, setName, releaseYear, setReleaseYear, director, setDirector, duration, setDuration, description, setDescription
        }}>
            {children}
        </FilmContext.Provider>
    );
};