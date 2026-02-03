# Formik & Yup Auth Form

This project is a simple authentication flow built with **React**, focusing on **form validation**, **protected routes**, and **clean component structure**.

It demonstrates how to manage form state and validation using **Formik** and **Yup**, along with basic route protection logic.

---

## 🚀 Features

- User registration and login forms
- Form validation with **Formik** & **Yup**
- Client-side authentication logic
- Protected routes (only accessible after login)
- Reusable and clean React components
- Modern frontend project structure

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Formik**
- **Yup**
- **React Router DOM**
- **CSS**

---

## 📂 Project Structure

src/
├── App.jsx
├── main.jsx
├── App.css
├── login.css
├── AuthContext.jsx
├── ProtectedRoute.jsx
├── Home.jsx
├── Login.jsx
├── Register.jsx

## 🔐 Authentication Logic

- Authentication state is managed via **React Context**
- Routes are protected using a custom `ProtectedRoute` component
- Unauthorized users are redirected to the login page

---

## ✅ Form Validation

- Form state is handled by **Formik**
- Validation rules are defined with **Yup**
- Error messages are shown dynamically based on user input

---

## ⚙️ Installation & Run

Clone the repository and install dependencies:

```bash
git clone https://github.com/USERNAME/formik-yup.git
cd formik-yup
npm install
npm run dev
```
