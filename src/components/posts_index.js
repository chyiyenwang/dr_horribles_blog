import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
  constructor(props) {
    super(props);
  } 

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>Dr Horrible's Blog</div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(null, {fetchPosts})(PostsIndex);