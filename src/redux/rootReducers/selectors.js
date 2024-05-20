const selectIsLoading = state => state.api.isLoading;

const selectError = state => state.api.error;

const selectApiState = state => state.api;

export { selectIsLoading, selectError, selectApiState };
