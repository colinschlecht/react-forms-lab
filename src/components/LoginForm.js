import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSub = e => {
    e.preventDefault()
    const { username, password } = this.state
    username && password ? this.props.handleLogin(this.state) : null
  }

  render() {
    return (
      <form onSubmit={this.handleSub} >
        <div>
          <label>
            Username
            <input 
                id="username" 
                name="username" 
                type="text" 
                value={this.state.username} 
                onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
                id="password" 
                name="password" 
                type="password" 
                value={this.state.password} 
                onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

{/* <input
id="username"
type="text"
name="username"
value={this.state.username}
onChange={this.handleInputChange}
/>  */}
