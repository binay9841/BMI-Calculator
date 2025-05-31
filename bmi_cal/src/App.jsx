import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="container">
        <h2>BMI Calcuator</h2>
        <form>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder="Enter weight value"></input>
          </div>
          <div>
            <label>Height (in)</label>
            <input type="text" placeholder="Enter height value"></input>
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
            <button className="btn btn-outline" type="submit">
              Reload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
