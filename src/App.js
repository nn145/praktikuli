import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  named: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('name is a required field'),
   lastname: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('lastname is is a required field'),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function App() {
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ 
          email: "", 
          password: "", 
          lastname: "", 
          named: ""
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <input
                  type="text"
                  name="name"
                  value={values.text}
                  placeholder="Enter Name"
                  id="name"
                  onChange={handleChange}
                />
                <p className="error">
                  {errors.named && touched.named && errors.named}
                </p>
                <input
                  type="text"
                  name="lastname"
                  value={values.text}
                  placeholder="Enter lastName"
                  id="name"
                />
                <p className="error">
                  {errors.lastname && touched.lastname && errors.lastname}
                </p>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Enter email"
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit">Registration</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default App;