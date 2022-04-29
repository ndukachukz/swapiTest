import React from "react";
import Pagination from "../Pagination";

const People = ({ data }: any) => {
  console.log("People", data);
  return (
    <>
      <div className="mx-5 md:grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        {data.map((info: any, i: any) => (
          <div className="card my-5 md:w-52 lg:w-72 bg-primary text-primary-content ">
            <div className="card-body">
              <h2 className="card-title">{info.name}</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>Gender: </span>
                {info.gender}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Hair Color:</span>
                {info["hair_color"]}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Eye Color:</span>
                {info["eye_color"]}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Height: </span>
                {info.height}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Skin Color: </span>
                {info.skin_color}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default People;
