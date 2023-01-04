import React from "react";
import ReactDOM from "react-dom";
import "../../styles/map.css"
import MapChart from "./MapChart";

export default function Map(props) {
  return (
    <div className="carteFeature">
      <div className="titleCarte">
      <center><h1>Vos points par pays</h1></center></div>
      <div className="carte">
      <MapChart />
      </div>
    </div>
  );
}
