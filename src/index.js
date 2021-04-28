import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Employee extends React.Component{
  state = {counter : 0}
  addEmployee=()=> {
    this.setState({counter : this.state.counter + 1})
  //  this.counter = this.counter + 1;
  //  alert(" Addng new employee ")
  //  alert("Add employee button is clicekd for " + this.counter + " times ")
  }
  render() { 
    return <div>
      <h1> Employee details : </h1>
      <p>
         <button onClick = {this.addEmployee}> Add Employee </button></p>
      <p> 
          <label> Add employee button is clicked : <b>{ this.state.counter}</b></label>
      </p>
    </div>;
  }
}



const element = <Employee ></Employee>

ReactDOM.render(element, document.getElementById("root"));

