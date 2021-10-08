// Selectors performs complex operations prior to grapping state via connect()
export const selectLoadingState = (state) => state.posts.isLoading;
export const selectPostsData = (state) => state.posts.data;
export const selectFailedState = (state) => state.posts.error;

export const selectPostsTitles = (state) => state.posts.data.title;