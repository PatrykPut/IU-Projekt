import { useContext } from "react";
import { FilmContext } from "../Context/FilmContext";
import Select from 'react-select';

const filterStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        backgroundColor: state.isSelected ? 'blue' : 'white',
        padding: 10,
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: '#f0f0f0',
        borderColor: 'transparent',
        height: '100%',
        width: '10vw',
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