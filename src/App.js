import React, { useState } from "react";
import "./App.scss";
import RightArrowIcon from "./assets/right_arrow.png";
import BackImage from "./assets/back.png";
import archiveImage from "./assets/1.png";
import appImage from "./assets/2.png";
import chromeImage from "./assets/3.png";
import vcImage from "./assets/4.png";
import blenderImage from "./assets/5.png";
import davinciImage from "./assets/6.png";
import figmaImage from "./assets/Figma.png";
import gimpImage from "./assets/GIMP.png";
import audacityImage from "./assets/Audacity.png";
import braveImage from "./assets/Brave.png";
import androidImage from "./assets/Android_Studio.png";
import spotifyImage from "./assets/Spotify.png";
import discordImage from "./assets/discord.png";
import slackImage from "./assets/Slack.png";
import YT_musicImage from "./assets/YouTubeMusic_Logo.png";
import Atom_Image from "./assets/Atom_editor_logo.png";
import Firefox_Image from "./assets/Firefox_logo.png";
import Sublime_Image from "./assets/sublime.png";

import searchImage from "./assets/search.png";
import profileImage from "./assets/profile.png";
import customBackImage from "./assets/new_back.png";

const imageNames = [
  "Google Chrome",
  "VS Code",
  "Blender",
  "DaVinci Resolve",
  "Figma",
  "Gimp",
  "Audacity",
  "Brave",
  "Android Studio",
  "Spotify",
  "Discord",
  "Slack",
];

const rowTitles = ["Browsers", "Music", "IDE", "Photo and Video Editor"];
const iconRows = [
  {
    icons: [chromeImage, braveImage, Firefox_Image],
    names: ["Google Chrome", "Brave", "Firefox"],
  },
  {
    icons: [spotifyImage, YT_musicImage],
    names: ["Spotify", "YT Music"],
  },
  {
    icons: [vcImage, Sublime_Image, blenderImage, Atom_Image],
    names: ["VS Code", "Submit Text", "Vim", "Atom"],
  },
  {
    icons: [gimpImage, davinciImage],
    names: ["Gimp", "Davinci Resolve"],
  },
];

// AppGrid component
const AppGrid = ({ images, names, startIndex = 0 }) => {
  const displayedImages = images.slice(startIndex, startIndex + 16);
  const displayedNames = names.slice(startIndex, startIndex + 16);

  return (
    <div className="grid-container">
      {displayedImages.map((imgSrc, index) => (
        <div key={index} className="grid-item">
          <img src={imgSrc} alt={`App ${index + 1}`} />
          <div className="image-name">{displayedNames[index]}</div>
        </div>
      ))}
    </div>
  );
};

const IconContainer = () => {
  return (
    <div className="icon-container">
      <div className="m_searchContainer_bar">
        <img src={searchImage} style={{ width: "20px", height: "20px" }} alt="" />
      </div>
      <div className="icons-content">
        {iconRows.map((row, rowIndex) => (
          <div key={rowIndex} className="icon-row-wrapper">
            <div className="row-title">{rowTitles[rowIndex]}</div>
            <div className="icon-row">
              {row.icons.map((icon, i) => (
                <div key={i} className="icon-wrapper">
                  <img src={icon} alt={`Icon ${i}`} className="icon" />
                  <div className="icon-name">{row.names[i]}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [startIndex, setStartIndex] = useState(0);
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [showIconContainer, setShowIconContainer] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isCustomize, setIsCustomize] = useState(false);

  const images = [
    chromeImage,
    vcImage,
    blenderImage,
    davinciImage,
    figmaImage,
    gimpImage,
    audacityImage,
    braveImage,
    androidImage,
    spotifyImage,
    discordImage,
    slackImage,
  ];

  const handleCustomizeClick = () => {
    console.log("Custom click!!");
    setIsCustomize(!isCustomize); // Toggle the value of isCustomize
  };

  return (
    <div
      className="App"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030209",
        }}
      >
        <img
          src={isCustomize ? customBackImage : BackImage}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt="Background"
        />
      </div>
      <div
        className="m_tagmenu"
        style={{
          position: "absolute",
          left: "50px",
          top: "38px",
          display: "flex",
        }}
      >
        <div className="m_tag_home" style={{ cursor: "pointer" }}>
          HOME
        </div>
        <div
          style={{ marginLeft: "auto", marginRight: "auto", cursor: "pointer" }}
        >
          +New Workspace
        </div>
      </div>
      <div className="m_dockerBar">
        <img src={archiveImage} style={{ cursor: "pointer" }} alt=""/>
        <img
          src={appImage}
          onClick={() => setShowIconContainer(!showIconContainer)}
          style={{ cursor: "pointer" }}
          alt=""
        />
        {showIconContainer && <IconContainer />}
        <img src={chromeImage} style={{ cursor: "pointer" }} alt=""/>
        <img src={vcImage} style={{ cursor: "pointer" }} alt=""/>
        <img src={blenderImage} style={{ cursor: "pointer" }} alt=""/>
        <img src={davinciImage} style={{ cursor: "pointer" }} alt=""/>
      </div>
      <div className="m_setting">
        <img
          src={searchImage}
          style={{ width: "20px", height: "20px" }}
          onClick={() => setShowSearchContainer(!showSearchContainer)}
          alt="Toggle Search"
        />
        {showSearchContainer && (
          <div className="m_searchCotainer">
            {/* Add the right arrow icon */}
            <img
              src={RightArrowIcon}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                
              }}
              onClick={() => {
                if (startIndex + 16 < images.length) {
                  // Check if there are more apps to show
                  setStartIndex(startIndex + 16);
                }
              }}
              alt=""
            />

            <div className="m_searchContainer_bar">
              <img
                src={searchImage}
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
            </div>

            {/* 4x4 AppGrid here */}
            <AppGrid
              images={images}
              names={imageNames}
              startIndex={startIndex}
            />
          </div>
        )}
        <img
          src={profileImage}
          onClick={() => setShowSettings(!showSettings)}
          alt="Profile"
          style={{ cursor: "pointer" }}
        />
        {showSettings && (
          <div className="settings-window">
            <div style={{ cursor: "pointer" }}>Admin Panel</div>
            <div style={{ cursor: "pointer" }}>Settings </div>
            <div onClick={handleCustomizeClick} style={{ cursor: "pointer" }}>
              Customisation
            </div>
            <div style={{ cursor: "pointer" }}>Report an Issue</div>
          </div>
        )}
        Thu, Sept 20 15:31
      </div>
    </div>
  );
}

export default App;
