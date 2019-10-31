import React,{Component} from 'react';
import axios from "axios";
import './App.css';
import Tab from "./Tab";




class App extends Component{
  constructor(props){
    super();
    this.state={
      data:[],
    }
  }


  componentDidMount(){
    axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(resp=>
      this.setState({data:resp.data})).catch(err=>console.log(err))
  }

  render()
  {
    return(
      <div>
        <Tab data={this.state.data}/>
      </div>
    );
  }
}




export default App;
