import { useState, useEffect } from 'react';
import { Wrapper } from './Controls.styled';
import { Search } from '../Search/Search';
import { CustomSelect } from '../CustomSelect/CustomSelect.styled';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
    // eslint-disable-next-line
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
