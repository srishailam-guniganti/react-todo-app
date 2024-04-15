import React from "react";
const Login = () => {
  const handleClick = () => {
    const clientId = "7f74bc8783d74398ad4362142d301358";
    const redirectUrl = "http://localhost:3001/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
    ];

    
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="image">
      <img src="https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg"></img>
      <button onClick={handleClick}>Connect spotify</button>
    </div>
  );
};
export default Login;
