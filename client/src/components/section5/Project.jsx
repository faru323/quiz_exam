import React from 'react'
import s from './project.module.scss'
const Project = () => {
  return (
    <div className={s.Project}>
      <div>
        {" "}
        <p className={s.title}>Do you Have any Project?</p>
        <p className={s.desc}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus.
        </p>
        <button> Contact us</button>
      </div>
    </div>
  );
}

export default Project
