import React, { Component } from 'react';
import '../upload.css'

class UploadMyFile extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
    }

    _handleImageChange(e) {
      e.preventDefault();
      const data = new FormData();
      data.append('file', e.target.files[0]);
      data.append('name', '');
      data.append('description', '');
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          data: data,
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img style={{borderRadius:20}} width="350"height="350" src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Séléctionner l'image qui va vous faire rentrer dans la légende</div>);
      }
  
      return (
        <div className="previewComponent">
          <form style={{padding:20}}  onSubmit={(e)=>this._handleSubmit(e)}  className="flex-justify-center">
            <label for="file" class="label-file">Choisir une image</label>
            <input id="file" class="input-file" type="file"  onChange={(e)=>this._handleImageChange(e)} />
            {/* <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} /> */}
          </form>
          <div style={{padding:20}}   className="imgPreview flex-justify-center">
            {$imagePreview}
          </div>
          {this.state.data && 
            <div style={{padding:20}}   className="flex-justify-center">
                <div onClick={() => this.props.upload(this.state.data) }> Valider </div>
                <div> Annuler </div>
            </div>
          }
        </div>
      )
    }
  }
    

  export default UploadMyFile;