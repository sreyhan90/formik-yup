import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import "./App.css";

function fakeRegister(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

const validationSchema = Yup.object({
  email: Yup.string().email("Geçerli bir email gir").required("Email zorunlu"),
  age: Yup.number()
    .typeError("Yaş sayı olmalı")
    .required("Yaş zorunlu")
    .min(18, "18 yaşından küçük olamaz"),
  username: Yup.string()
    .min(3, "Kullanıcı adı en az 3 karakter")
    .required("Kullanıcı adı zorunlu"),

  password: Yup.string()
    .min(8, "En az 8 karakter olmalı")
    .matches(/[A-Z]/, "En az 1 büyük harf olmalı")
    .matches(/[a-z]/, "En az 1 küçük harf olmalı")
    .matches(/[0-9]/, "En az 1 rakam olmalı")
    .matches(/[@$!%*?&]/, "En az 1 özel karakter içermeli (@$!%*?&)"),

  passwordRepeat: Yup.string()
    .oneOf([Yup.ref("password")], "Şifreler uyuşmuyor")
    .required("Şifre tekrarı zorunlu"),

  agreement: Yup.boolean().oneOf(
    [true],
    "Kullanım sözleşmesini kabul etmelisin",
  ),
});

function Register() {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <h2>Kayıt Ol</h2>
      <Formik
        initialValues={{
          email: "",
          age: "",
          username: "",
          password: "",
          passwordRepeat: "",
          agreement: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          fakeRegister({
            email: values.email,
            password: values.password,
          });

          navigate("/login");
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {errors.email}
              </div>
            )}

            <input
              type="number"
              name="age"
              placeholder="Yaş"
              value={values.age}
              onChange={handleChange}
            />
            {touched.age && errors.age && (
              <div style={{ color: "red", fontSize: "12px" }}>{errors.age}</div>
            )}

            <input
              type="text"
              name="username"
              placeholder="Kullanıcı Adı"
              value={values.username}
              onChange={handleChange}
            />
            {touched.age && errors.username && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {errors.username}
              </div>
            )}

            <input
              type="password"
              name="password"
              placeholder="Şifre"
              value={values.password}
              onChange={handleChange}
            />
            {touched.age && errors.password && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {errors.password}
              </div>
            )}

            <input
              type="password"
              name="passwordRepeat"
              placeholder="Şifre Tekrar"
              value={values.passwordRepeat}
              onChange={handleChange}
            />
            {touched.age && errors.passwordRepeat && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {errors.passwordRepeat}
              </div>
            )}

            <label className="checkbox">
              <input
                type="checkbox"
                name="agreement"
                checked={values.agreement}
                onChange={handleChange}
              />
              Kullanım sözleşmesini okudum, kabul ediyorum
            </label>
            {touched.age && errors.agreement && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {errors.agreement}
              </div>
            )}

            <button type="submit">Kaydol</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
