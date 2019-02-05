import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";


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


          <h1 class="lispace">Markdown App</h1>
          <ul class="lispace"><a href="https://fabiananguiano.com/">Portfolio</a></ul>
          <ul class="lispace"><a href="https://github.com/thetrebelcc">Github</a></ul>
          <ul class="lispace"><a href="https://www.linkedin.com/in/fabian-anguiano-0219a5147/">LinkedIn</a></ul>


          
        </div>



       <div class="markdowninput">
         <FormGroup controlId="formControlIsTextarea">
         <FormLabel>Markdown Input</FormLabel>
         <FormControl componentClass="textarea" placeholder="Enter Markdown " value={markdown} onChange = {(event)=>this.updateMarkdown(event.target.value)}></FormControl>
         </FormGroup>
       </div>

       <div>
<h1 class="mdoutput"> Markdown Output</h1>
<div class="box" dangerouslySetInnerHTML ={{__html: marked(markdown)}}></div>
</div>

      </div>
    );
  }
}

export default App;