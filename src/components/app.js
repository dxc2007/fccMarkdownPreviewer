import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

var inputText = "# Another deeper heading\n\n";
// var outputText = {__html: marked(inputText)};
console.log(marked('You are using `markdown`. Presented by https://github.com/chjj/marked'))

export default class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      inputText,
      outputText: {__html: marked(inputText)}
    };
  }

    render() {
        return (
          <div>
          <div id="inputBox">
          <textarea id="inputText" ref="textBox" cols="40" rows="30" defaultValue={this.state.inputText} onInput={this.parseText.bind(this)}>
          </textarea>
          </div>

          <div id="outputText" dangerouslySetInnerHTML={this.state.outputText} />
          </div>
        );
    }

    parseText() {
      this.setState({ inputText: this.refs.textBox.value });
      this.setState({ outputText: {__html: marked(this.state.inputText)} });
    }
}
