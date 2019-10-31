import React,{Component} from 'react';

import './App.css';


class App extends Component{
    constructor()
    {
        super();
        this.state = {
            idno:" "
        }
        
        this.myRef = React.createRef();
        
    }

    
        newNme(){
        
            const refValue=this.myRef.current.value;
            this.setState({
                idno: refValue,
            })
           console.log(refValue);


    }

    render(){
         
        return(
            <div>
                <p>User id:</p>
                <input type ="text" onChange ={this.newNme.bind(this)} ref={this.myRef} placeholder="No  between 1-100" ></input >
                {this.props.data.filter(f=>f.id===(parseInt(this.state.idno))).map(p=><p>{p.title}</p>)}
            </div>
        );
    }


    }

    export default App;
