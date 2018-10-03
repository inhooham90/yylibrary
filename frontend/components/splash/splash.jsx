import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
// import About from '../info_pages/info_container';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { dd: false };
    this.openDd = this.openDd.bind(this);
    this.closeDd = this.closeDd.bind(this);
  }

  componentDidMount() {
    this.setState({ dd: false })
  }

  openDd () {
    this.setState({ dd: true })
  }

  closeDd () {
    this.setState({ dd: false })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let toggle;
    if (!this.state.dd) {
      toggle = 'dd-closed';
    } else {
      toggle = 'dd-opened';
    };
    return (
      <section>
        <section className='splash-main'>
          <div className='splash-banner'>
            <p className='sans-serif'>
              Welcome to the <br/>Youyoung Library<br/><br/>
          </p>
          </div>

        </section>
        <section>
          <Link to="/books">See All Books</Link>
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
