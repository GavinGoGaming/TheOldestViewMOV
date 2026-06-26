"use client";
import Image from "next/image";
import LoopText from "./components/LoopText";
import { CSSProperties, ReactNode } from "react";

const loopTexts = [
  "THE OLDEST VIEW",
  "A SHORT FILM BY KENDREW LEE",
  "BASED ON THE WORKS BY KANE PARSONS",
  "PROJECT ROLLING GIANT",
]

export function csp(a: CSSProperties & any): CSSProperties {
  return a;
}

export function LogoText({ text, additional, style }: { text: string, additional?: ReactNode, style?: CSSProperties }) {
  return (
    <span className="logo" style={csp({ '--logo-text': `"${text}"`, ...style })}>
      <span>{text}{additional}</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="desktop">
        <div className="left">
          <LogoText text="THE OLDEST VIEW" />
        </div>
        <div className="actions middle">
          <i className="button fab fa-instagram" onClick={() => { window.open("https://www.instagram.com/project.rolling.giant") }}></i>
          <i className="button fab fa-youtube" onClick={() => { window.open("https://www.youtube.com/@thekendrew1") }}></i>
        </div>
        <div className="actions right">
          <span className="button" onClick={() => location.href = `#contribute`}>Contribute</span>
          <span className="button" data-disabled>Tickets</span>
        </div>
      </nav>
      <nav className="mobile">
        <i className="button fab fa-instagram" onClick={() => { window.open("https://www.instagram.com/project.rolling.giant") }}></i>
        {/* <LogoText text="MENU" additional={<i className="fa-sharp fas fa-caret-down" style={{ fontSize: '1.5rem' }}></i>} /> */}
        <LogoText text="OLDEST VIEW" style={{fontSize: '1.5rem'}} />
        <i className="button fab fa-youtube" onClick={() => { window.open("https://www.youtube.com/@thekendrew1") }}></i>
      </nav>
      <header>
        <video id="intro-video" playsInline src="/videos/intro-hd.mp4" muted autoPlay onClick={(e) => {
          if (e.currentTarget.style.opacity === "0") {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.muted = false;
            e.currentTarget.currentTime = 0;
            e.currentTarget.play();
          }
        }} onEnded={(e) => {
          e.currentTarget.style.opacity = "0";
        }} onError={(e) => {
          e.currentTarget.style.opacity = "0";
        }}></video>
        <video id="loop-video" playsInline src="/videos/loop-hd.mp4" autoPlay muted loop></video>
      </header>
      <LoopText loopTexts={loopTexts} />
      <div className="splitter"></div>
      <section>
        <div className="content">
          <div className="content-split">
            <div>
              <h1 className="legatum">Project <LogoText text="Rolling Giant" /></h1>
              <p>
                The Oldest View is a short film based on <a target="_blank" href="https://www.youtube.com/@kanepixels">Kane Parsons</a>' youtube web-series under the same name.<br />
                You can find more info about the project and future short film on <a target="_blank" href="https://instagram.com/project.rolling.giant"><i className="fab fa-instagram"></i>Instagram</a>.
              </p>
              <p>
                Created & directed by <b>Kendrew Lee</b>, found on YouTube as <a target="_blank" href="https://www.youtube.com/@thekendrew1"><i className="fab fa-youtube"></i>YouTube</a> & <a target="_blank" href="https://www.instagram.com/the.kendrew/"><i className="fab fa-instagram"></i>Instagram</a>.
              </p>
            </div>
            <div className="video-section" onClick={() => {
              window.open("https://www.youtube.com/playlist?list=PLVAh-MgDVqvAwoFF5hJmtRrx86Yw-pdN1");
            }}>
              <img src="https://upload.wikimedia.org/wikipedia/en/b/b1/The_Rolling_Giant_%28The_Oldest_View_Part_3%29.jpg" className="thumbnail" />
              <i className="fas fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
        <div id="contribute" className="content" style={{ marginTop: '2rem' }}>
          <h1 className="legatum">Contribute</h1>
          <p>
            We're always looking for talented individuals to join the crew. Feel free to submit your work below:
          </p>
          <div className="contribute-forms-grid">
            <div className="contribute-form">
              <div className="icon">
                <i className="fas fa-microphone"></i>
              </div>
              <div className="info">
                <b>Voice Acting</b>
                <span>Submit your voice acting samples to be considered for voice acting roles.</span>
                <button><i className="fas fa-arrow-up-right-from-square"></i> Apply</button>
              </div>
            </div>
            <div className="contribute-form">
              <div className="icon">
                <i className="fas fa-clapperboard"></i>
              </div>
              <div className="info">
                <b>VFX & Video Editing</b>
                <span>Submit work to be considered for VFX & video editing.</span>
                <button><i className="fas fa-arrow-up-right-from-square"></i> Apply</button>
              </div>
            </div>
            <div className="contribute-form">
              <div className="icon">
                <i className="fas fa-camera-movie"></i>
              </div>
              <div className="info">
                <b>Camera & Cinematography</b>
                <span>Submit work to be considered for camera control, photography, and cinematography</span>
                <button><i className="fas fa-arrow-up-right-from-square"></i> Apply</button>
              </div>
            </div>
            <div className="contribute-form">
              <div className="icon">
                <i className="fas fa-music"></i>
              </div>
              <div className="info">
                <b>Music</b>
                <span>Submit your music to be considered for usage or help in creating soundtracks, sound effects, & sound design.</span>
                <button><i className="fas fa-arrow-up-right-from-square"></i> Apply</button>
              </div>
            </div>
            <div className="contribute-form">
              <div className="icon">
                <i className="fas fa-paintbrush"></i>
              </div>
              <div className="info">
                <b>Art & Design</b>
                <span>Submit your music to be considered for usage or help in creating concept art or storyboarding.</span>
                <button><i className="fas fa-arrow-up-right-from-square"></i> Apply</button>
              </div>
            </div>
            <div className="contribute-form">
              <div className="icon">
                <i className="fas fa-cube"></i>
              </div>
              <div className="info">
                <b>3D Modeling</b>
                <span>Submit your 3D modeling work to be considered for props, environments, assets, and more.</span>
                <button><i className="fas fa-arrow-up-right-from-square"></i> Apply</button>
              </div>
            </div>
            <div className="contribute-form">
              <div className="icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="info">
                <b>Other</b>
                <span>Submit any talent, work, or content to be considered for filmmaking or to be included in the film.</span>
                <button><i className="fas fa-arrow-up-right-from-square"></i> Apply</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Contact via <a href="https://www.instagram.com/the.kendrew/" target="_blank"><i className="fab fa-instagram"></i>Instagram</a>. Site created with <i className="fas fa-heart"></i> by <a href="https://www.instagram.com/gavingogaming/" target="_blank">Gavin Fox</a>.</span>
      </footer>
    </main>
  );
}
