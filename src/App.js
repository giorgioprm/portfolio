import "./_App.scss";
import React from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/main/Main";
import projectsList from "./data/list_projects";
import Footer from "./Component/Footer";
// import NavBar from "./Component/Header/NavBar";

function App() {
  return (
    <>
      <Header />
      <Main projectsList={projectsList} />
      <Footer />
    </>
  );
}

export default App;
