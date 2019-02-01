import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import { BrowserRouter as Router, Route } from 'react-router-dom';


const marked =require("marked");






class App extends Component {


  state = {
    markdown:""
  }

  updateMarkdown = function (markdown) {
    this.setState({markdown});
  }

  render() {

let { markdown } = this.state;


    return (

      


      <div className="App container">
        <div class="sidenav">


          <h1>Logo</h1>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </div>

       <div class="markdowninput">
         <FormGroup controlId="formControlIsTextarea">
         <FormLabel>Markdown Input</FormLabel>
         <FormControl componentClass="textarea" placeholder="Enter Markdown " value={markdown} onChange = {(event)=>this.updateMarkdown(event.target.value)}></FormControl>
         </FormGroup>
       </div>

       <div>
          <h1 class="markdowninput"> Markdown Output</h1>
<div dangerouslySetInnerHTML ={{__html: marked(markdown)}}></div>


       </div>
      </div>
    );
  }
}

export default App;