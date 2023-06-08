import "./App.css";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import laptop from "./images/icon-laptop.svg";
import twitter from "./images/icon-twitter.svg";
import youtube from "./images/icon-youtube.svg";
import logo from "./images/logo.svg";
function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/LlgqG8BOtJdD1Dwe/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Downlaod</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>
              <a href="/">Get Started</a>
            </button>
          </li>
        </Menu>
        <h1>Hii this is Suman</h1>
        <p>I'm a front-end developer with a passion for crafting user experiences that are both beautiful and functional. I'm a bit of a nerd, but I'm also a lot of fun. Let's build something great together!</p>
        <button>
          <img src={laptop} alt="" /> Download My Resume
        </button>
      </Content>
      <Social>
        <div></div>
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media  (max-width: 1024px) {
      transform: scale(0.6);
      margin-right: 260px;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;

  flex-direction: column;
  gap: 80px;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    cursor: pointer;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: 500ms;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-5px);
      transition: 500ms;
    }
  }
  h1,
  p,
  button {
    margin: 0 30px 0 100px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  li {
    list-style: none;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: 1s;
    border-radius: 14px;

    :hover {
      border: solid rgba(255, 255, 255, 0.5);
    }
  }
`;

const Social = styled.div`
position:absolute;
top: 150px;
left: 30px;
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;

div {
  width: 1px;
  height: 500px;
  background-image: linear-gradient(to bottom, #4184e7, #6c79f0, #9869ef, #c44ee4, #eb12cf);
}

`;
export default App;
