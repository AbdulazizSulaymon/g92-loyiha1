import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from '../Card/Card';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGlide } from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';
import Counter from "../Counter"

const data = [
  {
    title: "Blue Ocean Waves Crash", icon: faGlobe
  },
  {
    title: "Waves Crash in Blue Ocean", icon: faGlide
  },
]

function App() {
  return (
    <div className="App">
      <Header />

      {/* Cards */}
      <div className="container py-3">
        <div className="row justify-content-center">
          {
            data.map((value, index) => {
              return <div className="col-md-6 col-lg-4 mb-4">
                <Card title={value.title} icon={value.icon} />
              </div>
            })
          }
        </div>
      </div>

      {/* Counter */}
      <div className="container py-5">
        <Counter startValue={10} />
        <Counter startValue={5} />
        <Counter startValue={25} />
      </div>

    </div>
  );
}

export default App;
