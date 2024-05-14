import { useState, useRef } from "react";
import styled from "styled-components";
import device from "../../constants/breakpoints";
import WhatIsJSXVideo from "../../assets/WhatIsJSX.mp4";
import PlayIcon from "../../assets/PlayIcon.png";

const VideoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2em;
  gap: 1em;

  @media ${device.tablet} {
    margin: 0 1em;
  }

  @media ${device.mobile} {
    margin: 0em;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const PlayButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

function VideoComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <VideoContainer>
      <Video
        ref={videoRef}
        controls={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={WhatIsJSXVideo} type="video/mp4" />
      </Video>
      {!isPlaying && (
        <PlayButton src={PlayIcon} alt="Play Button" onClick={handlePlay} />
      )}
    </VideoContainer>
  );
}

export default VideoComponent;
