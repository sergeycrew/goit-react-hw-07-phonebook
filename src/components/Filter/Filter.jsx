import { SearchForm, InputLabel, TextInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilterValue } from 'redux/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const handleFilter = e => dispatch(setFilterValue(e.target.value));
  console.log(filter);
  return (
    <SearchForm>
      <InputLabel htmlFor={nanoid()}>
        <TextInput
          id={nanoid()}
          onChange={handleFilter}
          type="text"
          name="filter"
          placeholder="find contacts by name"
          autoComplete="off"
          required
        />
      </InputLabel>
    </SearchForm>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };
