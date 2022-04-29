import React from "react";
import Pagination from "../Pagination";

const Planets = ({ data }: any) => {
  console.log("Planets", data);
  return (
    <>
      <div className="mx-5 md:grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        {data.map((info: any, i: any) => (
          <div className="card my-5 md:w-52 lg:w-72 bg-primary text-primary-content ">
            <div className="card-body">
              <h2 className="card-title">{info.name}</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>Diameter: </span>
                {info.diameter}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Terrain: </span>
                {info.terrain}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Surface Water: </span>
                {info.surface_water}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Rotation Period: </span>
                {info.rotation_period}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Population: </span>
                {info.population}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Gravity: </span>
                {info.gravity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default Planets;
