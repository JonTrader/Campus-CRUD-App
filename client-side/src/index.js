import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar' //testing
import Campus from './Components/Campus' //testing
import AddCampus from './Components/AddCampus' //testing


ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<AddCampus /> {/* added for testing */}
		{/* <App /> Removed for testing*/}
		
  	</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
