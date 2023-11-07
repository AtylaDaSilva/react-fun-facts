import React from "react";
import '../css/MainContent.css';

function MainContent(props) {
  const theme = props.theme;
    return (
      <main className={
        (theme==='dark' ? "main-content-dark" : "main-content-light")
      }>
        <h1>Reasons To Learn ReactJS!</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    );
}

export default MainContent;