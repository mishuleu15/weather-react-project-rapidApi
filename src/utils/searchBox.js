import Turnstone from 'turnstone';

import { useGetCurrentCitiesLocationQuery } from '../redux/services/getCities';

const SearchBox = () => {
  const { data } = useGetCurrentCitiesLocationQuery('piatra');

  const test = () => {
    console.log();
  };

  const listbox = {
    displayField: 'characters',
    data: data?.data,
    searchType: 'startsWith',
  };

  return (
    <Turnstone
      id='search'
      name='search'
      autoFocus={true}
      typeahead={true}
      onEnter={test}
      clearButton={true}
      debounceWait={250}
      listboxIsImmutable={true}
      maxItems={6}
      noItemsMessage="We couldn't find any character that matches your search"
      placeholder='Search for any character in the MCU'
      listbox={listbox}
    />
  );
};
export default SearchBox;
