import React, { memo } from "react";
import { Link } from "react-router-dom";
import { RadialProgress } from "./style";

interface PROPS {
  data: [];
}

const Home = memo(({ people, planets }: any) => {
  console.log(people);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row  text-center space-y-16 lg:space-y-0 lg:space-x-16">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold">
            People on Star Wars!
          </h1>
          <p className="py-6">
            <RadialProgress className="radial-progress bg-primary text-primary-content border-4 border-primary">
              {people | 0}%
            </RadialProgress>
          </p>
          <Link to="/people">
            <button className="btn btn-primary">Get Started </button>
          </Link>
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Planets on Star Wars!
          </h1>
          <p className="py-6">
            <RadialProgress className="radial-progress bg-primary text-primary-content border-4 border-primary">
              {planets | 0}%
            </RadialProgress>
          </p>
          <Link to="/planets">
            <button className="btn btn-primary">Get Started </button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Home;
