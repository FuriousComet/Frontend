import "./App.scss";
import React, { useState } from "react";
import RightArrowIcon from "./assets/right-arrow.png";
import BackImage from "./assets/back.png";
import archiveImage from "./assets/images/docker/1.png";
import appImage from "./assets/images/docker/2.png";
import chromeImage from "./assets/images/docker/3.png";
import vcImage from "./assets/images/docker/4.png";
import blenderImage from "./assets/images/docker/5.png";
import davinciImage from "./assets/images/docker/6.png";
import figmaImage from "./assets/icons/Figma.png";
import gimpImage from "./assets/icons/GIMP.png";
import audacityImage from "./assets/icons/Audacity.png";
import braveImage from "./assets/icons/Brave.png";
import androidImage from "./assets/icons/Android_Studio.png";
import spotifyImage from "./assets/icons/Spotify.png";
import discordImage from "./assets/icons/discord.png";
import slackImage from "./assets/icons/Slack.png";
import YT_musicImage from "./assets/icons/YouTubeMusic_Logo 1.png";
import Atom_Image from "./assets/icons/Atom_editor_logo 1.png";
import Firefox_Image from "./assets/icons/Firefox_logo,_2019 1.png";
import Sublime_Image from "./assets/icons/Slack.png";

import searchImage from "./assets/images/setting/search.png";
import profileImage from "./assets/images/setting/profile.png";
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
    names: ["Google Chrome", "Brave", "Firefox"]
  },
  {
    icons: [spotifyImage, YT_musicImage],
    names: ["Spotify", "YT Music"]
  },
  {
    icons: [vcImage, Sublime_Image, blenderImage, Atom_Image],
    names: ["VS Code", "Submit Text", "Vim", "Atom"]
  },
  {
    icons: [gimpImage, davinciImage],
    names: ["Gimp", "Davinci Resolve"]
  }
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
        <img src={searchImage} style={{ width: "20px", height: "20px" }} />
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
  const [isCustomize, setIsCustomize ] = useState(false);
  
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
    setIsCustomize(true);
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
          src={isCustomize?customBackImage:BackImage}
          style={{
            width: "100%",
            height: "100%",
          }}
        ></img>
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
        <div className="m_tag_home" style={{cursor:"pointer"}}>HOME</div>
        <div style={{ marginLeft: "auto", marginRight: "auto", cursor:"pointer"}}>
          +New Workspace
        </div>
      </div>
      <div className="m_dockerBar">
        <img src={archiveImage} style={{cursor:"pointer"}}/>
        <img src={appImage} onClick={() => setShowIconContainer(!showIconContainer)} style={{cursor:"pointer"}}/>
        {showIconContainer && <IconContainer />}
        <img src={chromeImage} style={{cursor:"pointer"}}/>
        <img src={vcImage} style={{cursor:"pointer"}}/>
        <img src={blenderImage} style={{cursor:"pointer"}}/>
        <img src={davinciImage} style={{cursor:"pointer"}}/>
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
              />

              <div className="m_searchContainer_bar">
                <img src={searchImage} style={{ width: "20px", height: "20px" }} />
              </div>

              {/* 4x4 AppGrid here */}
              <AppGrid images={images} names={imageNames} startIndex={startIndex} />
            </div>
        )}
        <img 
          src={profileImage} 
          onClick={() => setShowSettings(!showSettings)} 
          alt="Profile"
          style={{ cursor: 'pointer' }}
        />

        {showSettings && (
          <div className="settings-window">
            <div style={{cursor:"pointer"}}>Admin Panel</div>
            <div style={{cursor:"pointer"}}>Settings </div>
            <div onClick={handleCustomizeClick} style={{cursor:"pointer"}}>Customisation</div>
            <div style={{cursor:"pointer"}}>Report an Issue</div>
          </div>
        )}
        Thu, Sept 20 15:31
      </div>
    </div>
  );
}

export default App;
