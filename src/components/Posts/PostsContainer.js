// Step 1 of Container pattern: Connect to Redux Store and wrap Container around UI component
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/postsActions';
import {
  selectFailedState,
  selectLoadingState,
  selectPostsData,
  selectPostsTitles,
} from '../../store/selectors';

import Posts from './Posts';

const mapStateToProps = state => {
  return {
    isLoading: selectLoadingState(state),
    posts: selectPostsData(state),
    title: selectPostsTitles(state),
    error: selectFailedState(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
