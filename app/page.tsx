"use client";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

import ParallaxImage from "./ParallaxImage";

export default function Home() {
  return (
    <ReactLenis root>
      
      <div className="app">
        <section className="hero">
          <div className="img">
            <ParallaxImage src="/portrait/1.jpg" alt="" />
          </div>
          <div className="nav">
            <p>Tour</p>
            <p>Update</p>
            <p>Contact</p>
            <p>Merch</p>
          </div>
        </section>
        <section className="projects">
          <div className="img">
            <ParallaxImage src="/portrait/2.jpg" alt="" />
          </div>
          <div className="projects-brief">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum
              illo blanditiis et quo animi maxime, expedita reiciendis fuga
              recusandae nostrum nemo commodi
            </p>
          </div>
          <div className="col projects-cover">
            <div className="img">
              <ParallaxImage src="/portrait/3.webp" alt="" />
            </div>
          </div>
          <div className="col projects-list">
            <div className="project">
              <h1>Sunrise</h1>
              <p>Apple Music / Shopify</p>
            </div>
            <div className="project">
              <h1>Sunrise</h1>
              <p>Apple Music / Shopify</p>
            </div>
            <div className="project">
              <h1>Sunrise</h1>
              <p>Apple Music / Shopify</p>
            </div>
            <div className="project">
              <h1>Sunrise</h1>
              <p>Apple Music / Shopify</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="col intro">
            <p>Introduction</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum
              illo blanditiis et quo animi maxime, expedita reiciendis fuga
              recusandae nostrum nemo commodi
            </p>
          </div>
          <div className="col portrait">
            <div className="portrait-container">
              <div className="img">
                <ParallaxImage src="/portrait/4.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="banner">
          <div className="img">
            <ParallaxImage src="/portrait/5.jpg" alt="" />
          </div>
          <div className="banner-copy">
            <p>Be the</p>
            <h1>First to know</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              facilis, ab repellendus quisquam{" "}
            </p>
            <button>Join the newsletter</button>
          </div>
        </section>
        <section className="footer">
          <div className="col">
            <p>Instagram / Tiktok / Facebook</p>
          </div>
          <div className="footer-links">
            <p>Menu</p>
            <h1>Tour</h1>
            <h1>Menu</h1>
            <h1>Tour</h1>
          </div>
          <p>&copy; Designed by me</p>
          <div className="col">
            <p>
              Join the newsletter
              <br />
              <button>Suscribe</button>
            </p>
            <div className="shop">
              <div className="img">
                <ParallaxImage src="/portrait/6.webp" alt="" />
              </div>
            </div>
            <p>Shopify all the Rights reserverd</p>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
