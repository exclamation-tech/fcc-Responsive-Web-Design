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
      preview: false,
    };
  }
  componentDidMount() {
    fetch(gfmExampleLink)
      .then((res) => res.text())
      .then((text) => {
        return this.setState({ markdown: text });
      });
  }
  handleChange = (event) => {
    this.setState({ markdown: event.target.value });
  };
  togglePreview = () => {
    this.setState({
      preview: !this.state.preview,
      editor: !this.state.editor,
    });
  };
  render() {
    return (
      <div className="bg-gray-700 h-screen md:p-8">
        <div className="h-full flex flex-col">
          <h1 className="text-center text-white text-4xl">
            Markdown Previewer
          </h1>
          <div className="grid md:grid-cols-2 mt-4 h-full">
            <div
              className={
                this.state.preview
                  ? "bg-red-400 md:block hidden pt-1 md:mr-1"
                  : "bg-red-400 pt-1 md:block md:mr-1"
              }
            >
              <textarea
                id="editor"
                className="overflow-auto p-2 md:p-4 resize-none form-textarea outline-none block h-full w-full bg-red-300"
                value={this.state.markdown}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={
                this.state.editor
                  ? "bg-blue-400 md:block pt-1 md:ml-1"
                  : "bg-blue-400 hidden md:block pt-1 md:ml-1"
              }
            >
              <div
                id="preview"
                className="bg-blue-300 overflow-y-auto h-full p-2 md:p-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    emoji.emojify(marked(this.state.markdown))
                  ),
                }}
              ></div>
            </div>
          </div>
          <button
            className={
              this.state.preview
                ? "bg-red-300 h-12 border-red-500 border-4 md:hidden"
                : "bg-blue-300 h-12 border-blue-500 border-4 md:hidden"
            }
            onClick={this.togglePreview}
          >
            <p>Toggle Preview!</p>
          </button>
        </div>
      </div>
    );
  }
}
