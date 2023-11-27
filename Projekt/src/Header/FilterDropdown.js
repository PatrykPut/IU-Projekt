import { useContext } from "react";
import { FilmContext } from "../Context/FilmContext";
import Select from 'react-select';
import styled from "styled-components";

const filterStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#e6e6e6',
        borderColor: 'solid black 1px',
        borderRadius: '10px',
        height: '10%',
        width: '10vw',
        left: '10%',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        padding: '1%',
        cursor: 'pointer',
        boxShadow: '0px 3px 10px rgba(1, 1, 1, 1)',
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        borderColor: 'solid black 1px',
        borderRadius: '10px',
        left: '10%',
        padding: '1%',
        cursor: 'pointer',

    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        backgroundColor: state.isSelected ? 'blue' : 'white',
        padding: 10,
        borderRadius: '15px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#4a4aff',
            color: 'black',
            transform: 'scale(1.09)',
        },
    }),
}

const options = [
    { value: 'default', label: 'Default' },
    { value: 'releaseYear', label: 'Release Year' },
    { value: 'duration', label: 'Duration' },
    { value: 'mostRatings', label: 'Most Ratings' },
    { value: 'bestRatings', label: 'Best Ratings'}
];

export const Filter = () => {

    const { setSortOption } = useContext(FilmContext);

    const handleSort = (selectedOption) => {
        setSortOption(selectedOption.value);
    }

    return (
       
        <Select 
        styles={filterStyles}
        options={options}
        placeholder='Filter'
        onChange={handleSort}
        />
       
    )
}