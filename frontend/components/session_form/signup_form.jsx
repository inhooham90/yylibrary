import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fname: "",
      lname: "",
      number: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }

  componentWillUnmount() {
        this.props.clearErrors();
  }


  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    if (this.props.currentUser) {
      this.props.closeModal();
    }
    
    let errors;
    if (this.props.errors) {
      errors = (
        <ul className='error-list'>
          {this.props.errors.map( (error, key) => {
            return <li key={key}>{error}</li>;
          })}
        </ul>
      );
    }

    return (
      <div className='session-background'>
        <section className='session-form'>
          <form  onSubmit={this.handleSubmit}>
            <p style={{"paddingTop":"8%"}} className="session-header">Sign up and start <br />reading today!</p> <br/>
            <ul className='session-form-list'>
              <li>
                <label>First Name<br/>
                <input type="text" onChange={this.update('fname')} value={this.state.fname} />
                </label>
              </li>
              <li>
                <label> Last Name<br/>
                <input type="text" onChange={this.update('lname')} value={this.state.lname} />
                </label>
              </li>
              <li>
                <label>Phone Number<br/>
                <input type="text" onChange={this.update('number')} value={this.state.number} />
                </label>
              </li>

              <li>
                <label>Username<br/>
                <input type="text" onChange={this.update('username')} value={this.state.username} />
                </label>
              </li>

              <li>
                <label>Password<br/>
                <input type="password" onChange={this.update('password')} value={this.state.password} />
                </label>
              </li>
              <br/>

                <input className="submit-button" type="submit" value='Sign Up' />
            </ul>
        </form>
        <p>
          Already have an account? <button className='alternate-session' onClick={() => this.props.openModal("signin")}>Login</button>
        </p>
          {errors}
        </section>

      </div>
    );
  }
}

export default withRouter(SessionForm);
