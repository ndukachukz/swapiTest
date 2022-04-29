import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Globals from "./Constants/Globals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { People, Planets, Home } from "./components/";

function App() {
  const [people, setPeople] = useState<Array<object>>();
  const [planets, setPlanets] = useState<Array<object>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPeople() {
      setLoading(true);
      let res = await fetch(Globals.PEOPLE_API);
      let data = await res.json();

      setPeople(data.results);
      setTimeout(() => setLoading(false), 3000);
    }
    async function fetchPlanets() {
      setLoading(true);
      let res = await fetch(Globals.PLANETS_API);
      let data = await res.json();

      setPlanets(data.results);
      setTimeout(() => setLoading(false), 3000);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  console.log("People", people);
  console.log("Planets", planets);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* {loading && <Spinner />} */}

        <Route
          path={"/"}
          element={<Home people={people?.length} planets={planets?.length} />}
        />

        <Route path={"/planets"} element={<Planets data={planets} />} />

        <Route path={"/people"} element={<People data={people} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
