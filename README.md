# Formik & Yup Authentication App

This project is a **client-side authentication application** built with **React**.  
It demonstrates a complete authentication flow including **form validation**, **token-based login logic**, and **protected routes**.

The project focuses on using **Formik** and **Yup** for robust form handling, while implementing a simple **token-based authentication mechanism** on the frontend.

---

## 🚀 Features

- User registration and login forms
- Form validation with **Formik** & **Yup**
- Token-based authentication logic (client-side)
- Protected routes (accessible only when authenticated)
- Authentication state management with **React Context**
- Clean and reusable component structure
- Modern frontend project setup with Vite

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Formik**
- **Yup**
- **React Router DOM**
- **Context API**
- **CSS**

---

## 📂 Project Structure

````text
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
````

### 🧪 Note

This project demonstrates a frontend-only authentication flow for learning purposes.
