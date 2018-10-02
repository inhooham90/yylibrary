import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
// import About from '../info_pages/info_container';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let navRight;
    if (!this.props.currentUser) {
      navRight = (
        <ul>
          <li>
            <button className='splash-button1' onClick={() => this.props.openModal('signin')}>Sign In</button>
          </li>
          <li>
            <button className='splash-button1' onClick={() => this.props.openModal('signup')}>Sign Up</button>
          </li>
        </ul>
      )
    } else {
      navRight = (
        <ul>
          <li className='splash-button1'>
            {this.props.currentUser.username}
          </li>
        </ul>
      )
    }

    let navBar =
    (<div className='splash-nav'>
      <ul >
        <li><Link to='/'>Logo Here</Link></li>
      </ul>
        {navRight}
    </div>)
    return (
      <section>
        <section className='splash-main'>
          {navBar}
          <div className='splash-banner'>
            <p className='sans-serif'>
              Welcome to the <br/>Youyoung Library<br/><br/>
          </p>
          </div>

        </section>
        <div>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>
          hello<br/>      hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>
                hello<br/>      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
                      hello<br/>
        </div>
      </section>
    );
  }
}

export default Splash;
