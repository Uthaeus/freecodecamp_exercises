import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const marked = require("marked");

class App extends Component {

  state = {
    markdown: "# Header \n## SubHeader\n**Some Bold Text**\n> Here is a blockquote\n[some link](https://www.example.com)\n![alt text](image.jpg)\n`something = () => 'this';`\n```\n{'firstName': 'John',\n'lastName': 'Smith',\n'age': 25}```\n1. First item\n2. Second item\n3. Third item"
  }

  updateMarkdown = (markdown) => {
    this.setState({
      markdown  
    })
  }

  render() {
    let {markdown} = this.state;

    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl id="editor" componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
