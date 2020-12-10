import MobileList from "./MobileList";
import TabletList from "./TabletList";
import React, { useState } from "react";

const showLaptops = () => {
  console.log("Laptops List");
};

function Category() {
  const [mobileStatus, setMobileStatus] = useState(false);
  const [tabletStatus, setTabletStatus] = useState(false);
  const [LaptopStatus, setLaptopStatus] = useState(false);
  var showMobiles = () => {
    setMobileStatus(true);
    setTabletStatus(false);
    setLaptopStatus(false);
  };
  var showTablets = () => {
    setMobileStatus(false);

    setTabletStatus(true);
    setLaptopStatus(false);
  };
  return (
    <div className='category'>
      <ul>
        <li>
          <button onClick={() => showMobiles()}>Mobile</button>
        </li>
        <li>
          <button onClick={() => showTablets()}>Tablet</button>
        </li>
        <li>
          <button onClick={() => showLaptops()}>Laptop</button>
        </li>
      </ul>

      {mobileStatus ? <MobileList /> : ""}
      {tabletStatus ? <TabletList /> : ""}
    </div>
  );
}

export default Category;
