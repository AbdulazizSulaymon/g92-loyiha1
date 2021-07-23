import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react"
import Todo from '../Todo';
import Calc from '../Calc';
import Clock from '../Clock';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true }
  }

  toogle = () => {
    this.setState((state) => {
      return { show: !state.show };
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6 py-5 text-center">
              <Button onClick={this.toogle}>{this.state.show && "Hide" || "Show"}</Button>
              {this.state.show && <Clock /> || ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
