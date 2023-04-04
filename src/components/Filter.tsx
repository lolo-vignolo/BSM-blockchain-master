import { FC } from 'react';
import { Ifilter } from '../interfaces';

export const Filter: FC<Ifilter> = ({ filterText, setFilterText }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <label htmlFor="filter-text">Filter by Name:</label>
      <input
        type="text"
        id="filter-text"
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
      />
    </div>
  );
};
