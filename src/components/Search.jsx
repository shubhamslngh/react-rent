import data from "./MOCK_DATA.json";
import React, { useState } from "react";
import Cards from "./Cards";
import { Form, Navbar } from "react-bootstrap";
import { useEffect } from "react";
import Animate from "./Animate.jsx";
import navBar from "./navbar";
import Pricerange from "./Pricerange";
const Search = () => {
  const [fdata, setFdata] = useState(data);
  // console.log(fdata);

  const [copydata, setCopyData] = useState([]);

  // console.log(copydata);

  const changeData = (e) => {
    let getchangeData = e.toLowerCase();

    if (getchangeData == "") {
      setCopyData(fdata);
    } else {
      console.log(copydata);
      var defualtValue = true;
      let storedata = fdata.filter((ele, k) => {
        if (ele.location.toLowerCase().includes(getchangeData) == true) {
          return ele.location.toLowerCase().includes(getchangeData);
        } else if (ele.name.toLowerCase().includes(getchangeData) == true) {
          return ele.name.toLowerCase().includes(getchangeData);
        } else if (ele.price.toLowerCase().includes(getchangeData) == true) {
          return ele.price.toLowerCase().includes(getchangeData);
        }

        //more cases to write for filter
      });

      // } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){

      setCopyData(storedata);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setCopyData(fdata);
    }, 3000);
  }, []);

  return (
    <>
      <>
        <Form className="d-flex justify-content-center align-items-center mt-3">
          <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
            <Form.Control
              type="text"
              onChange={(e) => changeData(e.target.value)}
              placeholder="Search HOTELS"
            />
          </Form.Group>
        </Form>
        <section className="iteam_section mt-4 container">
          <h2 className="px-4" style={{ fontWeight: 400 }}>
            Hotels in Bengaluru
          </h2>

          <div className="row mt-2 d-flex justify-content-around align-items-center">
            {copydata && copydata.length ? (
              <Cards data={copydata} />
            ) : (
              <>
                <Animate data={data} />
              </>
            )}
          </div>
        </section>
      </>
    </>
  );
};

export default Search;
