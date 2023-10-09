import React, { useEffect, useContext } from "react";
import { Div, Input } from "./styled";
import { Title } from "../headers/styled";
import { useRequestData } from "../../hooks/useRequestData";
import AppContext from "./../../context/AppContext";

const SearchComponent = ({
  url,
  searchKey,
  itemKey,
  placeholder,
  title,
  renderItem,
}) => {
  const { searchTerm, searchResults, setSearchTerm, setSearchResults } =
    useContext(AppContext);
  const [data, isLoading, error] = useRequestData(url, {});

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      setSearchResults(data);
    } else {
      const filteredResults = data.filter((item) =>
        item[searchKey].toLowerCase().includes(newSearchTerm.toLowerCase())
      );

      setSearchResults(filteredResults);
    }
  };

  return (
    <Div>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={placeholder}
      />
      <Title>
        <h2>{title}</h2>
      </Title>
      <ul>
        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>Ocorreu um erro ao buscar os dados da API.</p>
        ) : searchResults && searchResults.length > 0 ? (
          searchResults.map((item) => (
            <div key={item[itemKey]}>{renderItem(item)}</div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </ul>
    </Div>
  );
};

export default SearchComponent;
