# React Portfolio – Experiment 5

This project is an extension of **Experiment 3 and Experiment 4**.
The application demonstrates routing, state management, context usage, and performance optimization in React.

---

## 🚀 Technologies Used

* React
* React Router
* Redux Toolkit
* Context API
* useMemo Hook
* CSS

---

## 📌 Experiment Progression

### Experiment 3

* Implemented **React Router**
* Created multiple pages:

  * Home
  * Projects
  * Contact / Portfolio layout
* Added navigation bar and routing between pages

### Experiment 4

* Added **Analytics page**
* Improved UI layout and navigation
* Implemented reusable components

### Experiment 5 (Current Update)

The following new features were added:

* Implemented **Redux Toolkit**

  * Configured `store.js`
  * Created `appSlice.js`
  * Added Redux actions for managing items
* Added **new page: Reports**
* Implemented **useMemo** to calculate completed items efficiently
* Implemented **Context API** for global theme toggle (Dark Mode)
* Maintained consistent UI design from previous experiments

---

## 📂 Folder Structure

src/

components/
    Navbar.jsx
    Footer.jsx
    ThemeToggle.jsx
    CardComponent.jsx

context/
    AppContext.jsx

redux/
    store.js

redux/slices/
    appSlice.js

pages/
    Home.jsx
    Projects.jsx
    Analytics.jsx
    Reports.jsx

App.jsx
main.jsx
index.css

---

## 🧠 Redux Features

The Redux slice manages application items.

Actions implemented:

* `addItem`
* `toggleItem`
* `deleteItem`

Redux state is used inside the **Reports page** and updated using `useDispatch` and `useSelector`.

---

## ⚡ Performance Optimization

`useMemo` is used in the **Reports page** to calculate the number of completed items without unnecessary recalculation.

Example:

Completed Items Count

---

## 🌙 Context API

Context API is used to manage **global theme state**.

Features:

* Light / Dark mode toggle
* Available across components through `AppContext`

---

## 📸 Screenshots

### Home Page

![Home](screenshots/home.png)

### Reports Page (New Page)

![Reports](screenshots/new-page.png)

### Redux Feature Demonstration

![Redux Feature](screenshots/redux-feature.png)

---

## 🛠️ Installation

Clone the repository:

git clone <repository-link>

Install dependencies:

npm install

Run the development server:

npm run dev

---

## 📌 Notes

* `node_modules` is excluded from the repository
* Screenshots are located in the `/screenshots` folder
* Project builds successfully with `npm run dev`
* The project maintains design consistency with previous experiments

## Details
* student name - Ankit Chauhan
* Section - AML-7 A
* submitted on - 5th march 2026
* github repo - https://github.com/ankitvchauhan/23bai70287-exp5-ankit
* deploy - 23bai70287-exp5-ankit.vercel.app