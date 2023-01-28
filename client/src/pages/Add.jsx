import React from "react";
import { useFormik } from "formik";
import { object, string, number, date, InferType } from 'yup';
import { Helmet } from "react-helmet";
const Add = () => {
  <Helmet>
    <meta charSet="utf-8" />
    <title>Add Page</title>
    <link rel="canonical" href="Busicol.com" />
  </Helmet>;

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});


const user = userSchema.validate( );


  const formik = useFormik({
    initialValues: {
      name: "",
      desc: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <form style={{"marginTop": '200px'}} onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="desc"
        name="desc"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    

      <button type="submit">Submit</button>
    </form>
  );
};
export default Add;
