import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import Table from './components/table'
import './ranking.css'

class Ranking extends Component {
  render() {
    return (
        <Table/>
    );
  }
}

export default Ranking;
