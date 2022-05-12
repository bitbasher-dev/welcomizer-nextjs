import type { NextPage } from "next";
import styled from "@emotion/styled";

const DEFAULT_VIDEO_WIDTH = 768;
const DEFAULT_VIDEO_HEIGHT = 432;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Title = styled.span`
  padding: 3rem;
  font-size: 3rem;
  font-weight: 600;
`;

const VideoContainer = styled.div`
  position: relative;

  width: ${DEFAULT_VIDEO_WIDTH}px;
  height: ${DEFAULT_VIDEO_HEIGHT}px;

  overflow: hidden;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: calc(${DEFAULT_VIDEO_WIDTH}px + 20px)) {
    width: ${DEFAULT_VIDEO_HEIGHT}px;
    height: ${DEFAULT_VIDEO_WIDTH}px;
  }
`;

const Video = styled.video`
  width: 100%;

  &::-webkit-media-controls-panel {
    position: absolute;
    top: calc(${DEFAULT_VIDEO_HEIGHT}px - 70px);
    width: 100%;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: calc(${DEFAULT_VIDEO_WIDTH}px + 20px)) {
    width: auto;
    height: 100%;

    &::-webkit-media-controls-panel {
      position: absolute;

      top: calc(${DEFAULT_VIDEO_WIDTH}px - 70px);

      width: ${DEFAULT_VIDEO_HEIGHT}px;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Title>Welcomizer 👋</Title>

      <VideoContainer>
        <Video
          controls
          src="https://firebasestorage.googleapis.com/v0/b/welcomizer-dev.appspot.com/o/videos%2F1651211876.mp4?alt=media&token=db303737-88e0-4d13-9b0a-ffb96e809c5f"
        />
      </VideoContainer>
    </Container>
  );
};

export default Home;
