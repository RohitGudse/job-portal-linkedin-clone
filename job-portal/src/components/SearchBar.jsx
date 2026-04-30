export const SearchBar = ({ setQuery }) => (
  <input onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
);