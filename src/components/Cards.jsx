import React from "react";
import Card from "react-bootstrap/Card";
import data from "./MOCK_DATA.json";
import Pricerange from "./Pricerange";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((element, k) => {
        return (
          <>
            <Card
              style={{ width: "22rem", border: "none" }}
              className="hove mb-4"
            >
              <Card.Img variant="top" className="cd" src={element.img} />

              <div className="card_body">
                <div className="upper_data d-flex justify-content-between align-items-center">
                  <h4 className="mt-2">{element.name}</h4>
                  <span>{element.date}&nbsp;</span>
                </div>

                <div className="lower_data d-flex  justify-content-between">
                  <h5>{element.location}</h5>
                  <span>{element.price}</span>
                </div>
                <div className="extra"></div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
