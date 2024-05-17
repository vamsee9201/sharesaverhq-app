import logo from './logo.svg';
import './App.css';


const testRideObject = {
  name:'Vamsee',
  from:'Marquis at waterview',
  to: '1011 eagle glen dr',
  number:'4695768978',
  miles:14,
};
function App() {
  return (
    <div >
     <RideRequest rideObject={testRideObject}/>
    </div>
  );
}

function RideRequest({rideObject}) {

  const { name, from, to, number, miles} = rideObject;
 
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{from}</li>
        <li>{to}</li>
        <li>{number}</li>
        <li>{miles}</li>
        <li>{miles}$</li>
      </ul>
    </div>
  );
}
export default App;
