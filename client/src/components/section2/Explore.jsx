import React from "react";
import s from './explore.module.scss'
import  { useState, useEffect } from "react";
import axios from "axios";

const Explore = () => {



  const [datas, setDatas] = useState([])
  useEffect(() => {
  axios.get("http://localhost:8080/data").then((res)=>{setDatas(res.data)})
  }, [])


function handleFilter(datas) {
  
datas.sort((a, b) => datas(a) - datas(b));
return setDatas
}

  return (
    <div className={s.explore}>
        <button onClick={handleFilter}>Filter by price</button>
      <div className={s.container}>
        {datas.map((data,index)=>{
          return (   <div  >
              <p>{data?.name}</p>
              <p>{data?.desc}</p>

              

          </div>)
        
        })}
        
      </div>
    </div>
  );
};

export default Explore;
