import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateContext";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

const Body = () => {
  const [{ token, selectedPlayListId, selectedPlayList }, dispatch] =
    useStateProvider();
  useEffect(() => {
    const getInitialPlayList = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlayListId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      const selectedPlayList = {
        id: data.id,
        name: data.name,
        description: data.description,
        image: data.images[0].url,
        tracks: data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artists) => artists.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          tracks_number: track.track_number,
        })),
      };
      console.log(JSON.stringify(response.data));
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlayList });
    };
    getInitialPlayList();
  }, [token, dispatch, selectedPlayListId]);
  console.log("Playlist ::", selectedPlayList);
  return (
    <div>
      {selectedPlayList && (
        <>
          { <div className="playlist">
            <div className="image">
              <img src={selectedPlayList.image} alt="selectedPlayList" />
            </div>
            <div className="details">
              <span className="type">PLAYLISTS</span>
              <h1 className="title">{selectedPlayList.name}</h1>
              <p className="description">{selectedPlayList.description}</p>
            </div>
            </div>
}
 {

            <div className="list">
              <div className="header_row">
                <div className="ash">
                  <span>VALUE</span>
                </div>
                <div className="title">
                  <span>TITLE</span>
                </div>
                <div className="album">
                  <span>ALBUM</span>
                </div>
              </div>
            </div>
}
 
          
           { <div className="tracks">
            
            {selectedPlayList.tracks &&
              selectedPlayList.tracks.map(
                (
                  {
                    id,
                    name,
                    artists,
                    image,
                    album,
                    context_uri,
                    tracks_number,
                  },
                  index
                ) => {
                  return (
                    <div className="row" key="id">
                     <div className="col_details">
                        <div className="image-sm">
                          <img src={image} alt="track" />
                        </div>
                        <div className="ind">
                          <span>{index + 1}</span>
                        </div>
                        <div className="info">
                          <span className="name">{name}</span>
                          <span>{artists}</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>{album}</span>
                      </div>
                    </div>
                  );
                }
              )}
          </div> } 
        </>
      )}
    </div>
  );
};

export default Body;
