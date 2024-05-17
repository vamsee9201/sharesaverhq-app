import logo from './logo.svg';
import './App.css';


const testRideObject = {
  name:'Vamsee',
  from:'Marquis at waterview',
  to: '1011 eagle glen dr',
  number:'4695768978',
  miles:14,
  total:8
}
function App() {
  return (
    <div className="App">
     <rideRequest/>
    </div>
  );
}

function rideRequest(rideObject) {
  return (
    <div>
      <ul>
        <li>{rideObject.name}</li>
        <li>{rideObject.fromAddress}</li>
        <li>{rideObject.toAddress}</li>
        <li>{rideObject.number}</li>
        <li>{rideObject.miles}</li>
        <li>{rideObject.total}</li>
      </ul>
    </div>
  );
}
export default App;
