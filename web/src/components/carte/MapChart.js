import React, { useEffect, useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const MapChart = () => {
    const [data, setData] = useState([]);
    const [countries, setCountries] = useState([]);
    const [maxValue, setMaxValue] = useState(0);
    const [pointsPays, setPointsPays] = useState([]); 

    useEffect(() => {
        csv("/data.csv").then((cities) => {
            const sortedCities = sortBy(cities, (o) => -o.population);
            setMaxValue(sortedCities[0].population);
            setData(sortedCities);
            fetch("/userPoints").then(
                res => res.json()
            ).then(
                data => {
                    setPointsPays(data);
                    const filteredCountries = filterArray();
                    setCountries(filteredCountries); 
                }
            );
        });    
    }, [countries]);  




    const popScale = useMemo(
        () => scaleLinear().domain([0, maxValue]).range([5,7]),
        [maxValue]
    );

    const filterArray = () => {      
        return data.filter(({country},index) => {
            return pointsPays.some((pays,index2) => {
                if(pays.countryName == country){
                    data[index].points =  pays.points.toString();
                    return true;
                }; 
            })           
        });
    }
  return (
        <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
                    ))
                }
            </Geographies>
            {countries.map(({ country,city_code, lng, lat,points}) => {
                return (
                <Marker key={city_code} coordinates={[lng, lat]}>
                    <circle fill="#F53" stroke="#FFF" r={popScale(points)}/>
                    <text>{points}</text>
                </Marker>
                ); 
            })}
        </ComposableMap>

  );
};

export default MapChart;