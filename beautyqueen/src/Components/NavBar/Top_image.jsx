import "./NavBar.css";
import topimage from "./ad-desktop.jpg";

export const TopImageDiv = () => {
  return (
    <div id="topimagediv">
      <img id="banner" src={topimage} alt="" />
      <img
        id="google_play"
        src="https://www.beautybebo.com/pub/media/bb-app.png"
        alt=""
      />
    </div>
  );
};
