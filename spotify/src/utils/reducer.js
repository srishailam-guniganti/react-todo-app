import { reducerCases } from "./Constants";
export const initialstate = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlayListId: "6lA2Le0aMYhlqUuaRsV9Lg",
  selectedPlayList: null,
  currentlyPlaying:null,
  playerState:false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlayList: action.selectedPlayList,
      };
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying,
      };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        playerState: action.playerState,
      };
    }
    default:
      return state;
  }
};
export default reducer;
