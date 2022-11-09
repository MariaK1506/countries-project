import { IoSearch } from 'react-icons/io5';
import { InputContainer, Input } from './Search.styled';

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={event => setSearch(event.target.value)} value={search} />
    </InputContainer>
  );
};
