import React from "react";

const People = ({ data }: any) => {
  console.log("People", data);
  return (
    <div className="mx-5 md:grid grid-flow-row-dense grid-cols-3 grid-rows-3">
      {data.map(() => (
        <div className="card my-5 md:w-52 lg:w-72 bg-primary text-primary-content ">
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{/* <span style={{ fontWeight: "bold" }}> {data}</span> */}</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
