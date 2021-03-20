import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characterCount: this.props,
      message: ''
    };
  }

  onInputChange = e => {
    console.log(this.props.maxChars)
    this.setState({
      message: e.target.value,
      characterCounter: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onInputChange} type="text" name="message" id="message" value={this.state.message}/>
        <strong>Remaining Characters: {this.state.characterCounter}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
