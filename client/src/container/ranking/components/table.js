import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../ranking.css';

class Table extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };
    render() {
        const { data } = this.props;
        return (
            <div className='ranking-table' style={{padding:10}}>
                <table style={{width:'100%'}}>
                    <thead>
                    <tr>
                        <th>Position</th>
                        <th>Photo</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.map((item, index) => (
                        <tr>
                            <td >
                                <p className='row-p'> {index + 1} </p>
                            </td>
                            <td style={{display:'flex',justifyContent:'center'}}>
                                <img className='row-img' src={item.url} /> 
                            </td>
                            <td >
                                <p className='row-p'> {item.score} </p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateTopProps = state => ({
    loading: state.picture.load.loading,
    data: state.picture.load.data,
    error: state.picture.load.error,
});
  

export default connect(mapStateTopProps)(Table);

