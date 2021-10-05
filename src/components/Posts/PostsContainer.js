import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actionCreators/postsActionCreator'

import Posts from './Posts'

const mapStateToProps = (state) => {
  return {
    isLoading: state.posts.isLoading,
    posts: state.posts.data,
    error: state.posts.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
