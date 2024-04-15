import React, { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateContext";
import { reducerCases } from "../utils/Constants";

const Playlists = () => {
  let [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlayListsData = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
       const {items} = response.data;
      console.log(items);
      const playlists =items.map(({name, id}) => {
         return (
          {name, id}
         );
       });
dispatch({type:reducerCases.SET_PLAYLISTS, playlists})
       console.log(playlists);
    };
    getPlayListsData();
  }, []);
  return (
    <div>
      {
        playlists.map(({name, id}) => {
          return (
            <ul>
              <div>
                <li key="id">{name}</li>
              </div>
            </ul>
          );
        })}
    </div>
  );
};
export default Playlists;
