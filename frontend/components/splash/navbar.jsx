import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { dd: false };
    this.openDd = this.openDd.bind(this);
    this.closeDd = this.closeDd.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  openDd () {
    this.setState({ dd: true })
  }

  closeDd () {
    this.setState({ dd: false })
  }

  render() {
    let toggle;
    if (!this.state.dd) {
      toggle = 'dd-closed';
    } else {
      toggle = 'dd-opened';
    };
    let logout = () => {
      this.props.logout();
      this.closeDd();
    }
    let navRight;
    if (!this.props.currentUser) {
      navRight = (
        <ul style={{"display": "inline-flex"}}>
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
          <li className='splash-button1' onMouseEnter={this.openDd} onMouseLeave={this.closeDd}>
            {this.props.currentUser.username}
            <ul className={toggle}>
              <li>
                <Link to="/books">See All Books</Link>
              </li>
              <li onClick={logout}>
                  Log Out
              </li>
            </ul>
          </li>
        </ul>
      )
    }

  let navBar =
  (<div className='splash-nav'>
    <ul >
      <li><Link to='/'><img className="splash-logo" src={window.logo}/></Link></li>
    </ul>
      {navRight}
  </div>)
      return (
        navBar
      )
  }
}

export default Navbar;
