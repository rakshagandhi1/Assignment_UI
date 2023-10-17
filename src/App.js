import './App.css';
import Sidebar from './Components/Sidebar';
import GraphDetail from './Components/GraphDetail';

function App() {
  return (
    <div className="App">
      <div className='row dashboardContainer'>
        <div className='col-lg-2 col-sm-4 col-xs-12 sidebarBlock'>
      <Sidebar />
      </div>
      <div className='col-lg-10 col-sm-8 col-xs-12 detailsBlock'>
      <GraphDetail />
      </div>
      </div>
    </div>
  );
}

export default App;
