import React from "react";
import s from "./explore.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Explore = () => {
  const [datas, setDatas] = useState([]);
  const [shownDatas, setshownDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => {
      setDatas(res.data);
    });
  }, []);

  useEffect(() => {
    setshownDatas(datas);
  }, [datas]);

  const handleSearch = (e) => {
    setshownDatas(
      datas.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
   
  };

  return (
    <div className={s.explore}>
      <button>Filter by price</button>
      <input onChange={handleSearch} placeholder="enter name" />
      <div className={s.container}>
        {shownDatas.map((data, index) => {
          return (
            <div>
              <p>{data?.name}</p>
              <p>{data?.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
