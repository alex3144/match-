import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadPicture }  from '../../actions/picture/upload';
import UploadMyFile from './components/uploadComponent';

class Upload extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool
  };
  constructor(){
    super();
    this.state = {
      item1: '',
      item2: '',
    }
  }
  upload = (data) => {
    if(data){
      this.props.uploadPicture(data)
    }
  }
  render() { 
    const { loading, data } = this.props;
    return (
      <div>
        {!loading && data !== true && <UploadMyFile upload={this.upload}/>}
        {loading && 
           <div style={{padding:20}}   className="flex-justify-center">
              <p>Chargement de votre photo en cour</p>
            </div>}
        {!loading && data === true && 
          <div style={{padding:20}}   className="flex-justify-center">  
            <p>Vous venez d'entrez dans le jeu, bonne chance </p>
          </div> }
      </div>
    );
  }
}


const mapStateTopProps = state => ({
  data: state.picture.upload.data,
  loading: state.picture.upload.loading,
});


export default connect(mapStateTopProps,{ uploadPicture })(Upload);


