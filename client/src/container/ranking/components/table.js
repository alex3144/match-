import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PictureModal from './modal';
import '../ranking.css';

class Table extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };
    render() {
        const { data } = this.props;
        return (
                <div style={{
                    width: '90%',
                    marginLeft: '5%',
                }} >
                    <div style={{
                        display:'flex',
                        flex:1,
                        flexDirection:'column',
                    }} >
                        {data && data.map((item, index) => (
                            <div className="main-table" >
                                <div className="first-table-div flex-01">
                                    <div className="number-table">
                                        <p className='row-p' > {index + 1} </p>
                                    </div>
                                </div>
                                <div className="first-table-div">
                                   {item.state === 'up' && <p className='row-p' > ++</p> }
                                   {item.state === 'down' && <p className='row-p' > -- </p> }
                                   {item.state === 'equal' && <p className='row-p' > == </p> }
                                </div>
                                <div style={{display:'flex', flex:0.6}}>
                                    {/* <img className='row-img' src={item.url} /> */}
                                    <PictureModal  src={item.url} />
                                </div>
                                <div className="first-table-div">
                                     <div className="points-table">
                                        <p className='row-p'> {item.score} pts </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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

