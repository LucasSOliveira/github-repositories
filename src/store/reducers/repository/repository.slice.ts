import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  loading: false,
  repository: {
    id: "",
    name: "",
    description : "",
    owner: "",
    avatarUrl: "",
    stargazers: "",
    primaryLanguage: "",
    languageColor: "",
    updateAt: "",
    url: "",
    totalIssues: "",
    totalPullRequests: "",
    totalCommits: "",
  },
  repositoriesList: [],
};

const reducers = {
  setRepositoriesList: (state: any, repositories: any) => { state.repositoriesList = repositories.payload },
  setRepository: (state: any, repository: any) => { state.repository = repository.payload },
  setOpenModal: (state: any, openModal: any) => { state.openModal = openModal.payload },
  setLoading: (state: any, loading: { payload: any }) => { state.loading = loading.payload },
};

export const counterSlice = createSlice({
  name: "repository",
  initialState,
  reducers,
});

export const { 
  setRepositoriesList,
  setRepository,
  setOpenModal,
  setLoading,
} = counterSlice.actions;

export default counterSlice.reducer;
