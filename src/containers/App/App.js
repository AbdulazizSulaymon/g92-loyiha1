import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from '../Todo';
import { render } from '@testing-library/react';
import React from "react"

let data = [
  {
    text: "Cras justo odio",
    completed: false
  },
  {
    text: "Dapibus ac facilisis in",
    completed: true
  },
  {
    text: "Morbi leo risus",
    completed: false
  },
]


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6 py-5">
              <Todo tasks={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
