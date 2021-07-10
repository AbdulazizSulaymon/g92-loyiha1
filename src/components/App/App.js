import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from '../Card/Card';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGlide } from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <Card title="Blue Ocean Waves Crash" icon={faGlobe} />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <Card title="Waves Crash in Blue Ocean" icon={faGlide} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
