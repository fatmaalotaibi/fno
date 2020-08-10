import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import AddButton from "../Buttons/AddButton";
import SearchBar from "../SearchBar";
import InstituteItem from "./InstituteItem";

// Styles
import { Title } from "../../styles";

// Stores
import instituteStore from "../../Stores/instituteStore";

const InstituteList = ({ courses }) => {
  const [query, setQuery] = useState("");
  console.log(instituteStore.institutes);
  if (!instituteStore.institutes) return <p>No institutes</p>;

  const instituteList = instituteStore.institutes
    .filter((institute) =>
      institute.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((institute) => (
      <InstituteItem institute={institute} key={institute.id} />
    ));

  return (
    <div className="container">
      <Title>Institutes</Title>
      <SearchBar setQuery={setQuery} />
      {instituteList}
      <AddButton />
    </div>
  );
};

export default observer(InstituteList);
