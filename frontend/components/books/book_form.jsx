import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { receiveBook } from '../../actions/book_actions';


const CLOUDINARY_UPLOAD_PRESET = 'jrlihltj';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/da345yxkr/upload';


export default class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      title: '',
      description: '',
      year: '',
      author: '',
      cover_url: '',
    };
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitFail = this.handleSubmitFail.bind(this);
    this.update=this.update.bind(this);
  }

  handleSubmitSuccess(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.closeModal();
  }

  handleSubmitFail(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {


      if (response.body.secure_url !== '') {
        this.setState({
          cover_url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = (
        <ul className='error-lists'>
          {this.props.errors.map( error => {
            return <li>{error}</li>;
          })}
        </ul>
      );
    }

    let handleSubmit;
    if (this.state.title.length === 0 || this.state.description.length === 0 ) {
      handleSubmit = this.handleSubmitFail;
    } else {
      handleSubmit = this.handleSubmitSuccess;
    }

    let content;
    if (!this.state.cover_url) {
      content = (
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
          className='dropzone'>
          <p>
          <button className='upload-button'>Upload</button>
          Or drag & drop photos anywhere on this page</p>

      </Dropzone>
      )
    } else {
      content = (
      <form className='dropzone-form'>
          <div className='preview'>
            <img className='upload-cover' src={this.state.cover_url} />
          </div>
          <div className='upload-form'>
            <ul className='upload-form-list'>
              <li>
                <button className='upload-button' onClick={handleSubmit}>Submit</button>
              </li>
              <li>
                <label><p>Title</p>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')} />
                </label>
              </li>
              <li>
                <label><p>Book ID Code</p>
                  <input
                    type="text"
                    value={this.state.code}
                    onChange={this.update('code')} />
                </label>
              </li>
              <li>
                <label><p>Author</p>
                  <input
                    type="text"
                    value={this.state.author}
                    onChange={this.update('title')} />
                </label>
              </li>
              <li>
                <label><p>Year</p>
                  <input
                    type="text"
                    value={this.state.year}
                    onChange={this.update('title')} />
                </label>
              </li>
              <li>
                <label><p>Description</p>
                  <textarea
                    value={this.state.description}
                    onChange={this.update('description')} />
                </label>
              </li>
              <li>
                {errors}
              </li>
            </ul>
          </div>
      </form>
      )
    }

    return (
        content
    );
  }
}
