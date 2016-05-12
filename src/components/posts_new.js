import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
  render() {
    // const handleSubmit = this.props.handleSubmit
    // const title = this.props.fields.title
    const {fields: {title, content}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create New Post</h3>

        <div className={`form group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'content'],
  validate
}, null, {createPost})(PostsNew);