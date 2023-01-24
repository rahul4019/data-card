import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");

      response = await response.json();
      setData(response);
    };

    fetchData();
  }, []);

  const selectPageHandler = (selectedpage) => {
    if (
      selectedpage >= 1 &&
      selectedpage <= data.length / 2 &&
      selectedpage !== page
    ) {
      setPage(selectedpage);
    }
  };

  const nonActivePageStyle = "py-1 px-2 border-2 cursor-pointer";
  const activePageStyle =
    "py-1 px-2 border-2 cursor-pointer bg-red-400 text-white";

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-blue-50">
      {data.length > 0 &&
        data.slice(page * 3 - 3, page * 3).map((user) => {
          return <ListCard key={user.id} user={user} />;
        })}

      {data.length > 0 && (
        <div className="flex items-center">
          <span
            className={page === 1 ? "hidden" : "p-2 cursor-pointer"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀️
          </span>
          {[...Array(Math.round(data.length / 3) + 1)].map((_, i) => {
            return (
              <span
                key={i}
                className={
                  page === i + 1 ? activePageStyle : nonActivePageStyle
                }
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}{" "}
              </span>
            );
          })}
          <span
            className={page < data.length / 3 ? "p-2 cursor-pointer" : "hidden"}
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
