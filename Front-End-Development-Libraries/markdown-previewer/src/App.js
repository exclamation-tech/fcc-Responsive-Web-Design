import React from "react";
import "./app.css";
import DOMPurify from "dompurify";
const emoji = require("node-emoji");
const marked = require("marked");
const gfmExampleLink =
  "https://raw.githubusercontent.com/tchapi/markdown-cheatsheet/master/README.md";

marked.setOptions({
  breaks: true,
});
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(gfmExampleLink)
      .then((res) => res.text())
      .then((text) => {
        return this.setState({ markdown: text });
      });
  }
  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="bg-gray-700 h-screen p-8">
        <div className="h-full flex flex-col">
          <h1 className="text-center text-white text-4xl">
            Markdown Previewer
          </h1>
          <div className="grid grid-cols-2 mt-4 h-full">
            <div className="bg-red-400 pt-1 mr-1">
              <textarea
                id="editor"
                className="overflow-auto p-2 resize-none form-textarea outline-none block h-full w-full bg-red-300"
                value={this.state.markdown}
                onChange={this.handleChange}
              />
            </div>
            <div className="bg-blue-400 pt-1 ml-1">
              <div
                id="preview"
                className="bg-blue-300 overflow-y-auto h-full p-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    emoji.emojify(marked(this.state.markdown))
                  ),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
