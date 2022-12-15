import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import data from "./MOCK_DATA.json";
import Cards from "./Cards";
const Pricerange = () => {
  const [value, setValue] = React.useState(data);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    {
      /* <Cardsval data={data} /> */
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "block",
        width: "fit-content",
      }}
    >
      <h3>Select Price Range</h3>
      <Typography id="range-slider" gutterBottom></Typography>
      <Slider
        value={value}
        min={99}
        max={1000}
        onChange={<Cards data={data} />}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {99} $/- and {1000} $ /-
    </div>
  );
};

export default Pricerange;
