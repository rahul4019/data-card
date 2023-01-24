import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");

      response = await response.json();
      setData(response);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-blue-50">
      {data.length > 0 &&
        data.map((user) => {
          return <ListCard key={user.id} user={user} />;
        })}
    </div>
  );
};

export default Home;
