import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar'
import AllCampuses from './Components/AllCampuses'
import AllStudents from './Components/AllStudents'
import AddCampus from './Components/AddCampus'
import AddStudent from './Components/AddStudent'
import Campus from './Components/Campus'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" component={AllCampuses} exact/>
				<Route path="/allCampuses" component={AllCampuses} exact/>
				<Route path="/allStudents" component={AllStudents} exact/>
				<Route path="/addCampus" component={AddCampus}/>
				<Route path="/addStudent" component={AddStudent}/>
				<Route path="/campus::id" component={Campus} />
				{/* <Route path="/campus::id" component={Campus} /> */}
				<Route path="" />
				<Route path="" />
			</Switch>
		</Router>
  	</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
