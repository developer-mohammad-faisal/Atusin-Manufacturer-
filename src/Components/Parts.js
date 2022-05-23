import React, { Fragment, useEffect, useState } from "react";
import PartsCard from './PartsCard'

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <Fragment>
      <section className="p-7">
        <h1 className="text-center text-primary text-3xl font-bold">Parts of Car </h1>
        <div className="grid gap-8 pt-8 mx-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {parts.map((part) => (
            <PartsCard key={part._id} part={part} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Parts;
