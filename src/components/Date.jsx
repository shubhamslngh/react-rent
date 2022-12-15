import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { useState } from "react";
function Date() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <DatePicker onChange={onChange} value={value} />
    </>
  );
}
export default Date;
