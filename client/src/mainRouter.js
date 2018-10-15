import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Ranking from './container/ranking'
import Match from './container/match'
import Upload from './container/upload'
import { fetchData } from './actions/picture/load'
import './index.css';

class MainRouter extends PureComponent {
  
  componentDidMount(){
    this.props.fetchData()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <div className='flex-03' style={{color:'white', backgroundColor: '#2ab7ca '}}>
              <NavLink to="/ranking" className="a">
                <span> Classement </span>
              </NavLink>
            </div>
            <div className='flex-03'style={{color:'white', backgroundColor: '#fed766 '}}>
              <NavLink to="/" className="a">
                <span> Jouer </span>
              </NavLink>
            </div>
            <div className='flex-03' style={{color:'white', backgroundColor: '#fe4a49 '}}>
            <NavLink to="/enter-in-the-game" className="a">
              <span> Entrez dans le game </span>
            </NavLink>
            </div>
          </div>
          <div>
            <Route path="/enter-in-the-game" match={this.props.match} component={Upload} />
            <Route path="/ranking" match={this.props.match} component={Ranking} />
            <Route path="/" exact order={1}  component={Match} />
          </div>
        </div>
      </Router>
    );
  }
}


export default connect(null, { fetchData })(MainRouter);

