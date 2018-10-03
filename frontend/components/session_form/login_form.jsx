import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
      errors =
        <ul className='error-list'>
          {this.props.errors.map((error, idx) => {
            return <li key={idx} >{error}</li>
          })}
        </ul>
    }

    return (
      <div className='session-background'>
        <section className='session-form'>
            <form  onSubmit={this.handleSubmit}>
              <p style={{"paddingTop":"8%"}} className="session-header">Welcome back!<br />Ready to read another one?</p> <br/>
              <ul className='session-form-list'>
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
                <br />
                  <input className="submit-button" type="submit" value='Log In' />
              </ul>

            </form>
            <p>
              Don't have an account? <button className='alternate-session' onClick={() => this.props.openModal("signup")}>Sign Up</button>
          </p>
        {errors}
      </section>
      </div>
    );
  }
}
export default withRouter(SessionForm);
