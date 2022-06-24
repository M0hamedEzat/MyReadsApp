import { React } from "react";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

const AllShelves = () => {
  return (
    <div>
      <CurrentlyReading />
      <WantToRead />
      <Read />
    </div>
  );
};

export default AllShelves;
