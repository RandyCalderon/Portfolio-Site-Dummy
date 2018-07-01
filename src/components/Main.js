import React from "react";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

const Home = () => (
  <div className="home">
    <h1>Welcome to my portfolio website</h1>
    <p>Feel free to browse around and learn more about me</p>
  </div>
);

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eos quos
      nobis distinctio tenetur eum odit? Consectetur atque sint, ea aut eum a
      distinctio illum ducimus, eligendi aliquid, voluptatem perferendis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut
      cupiditate blanditiis exercitationem culpa ex fugit voluptate dolor
      commodi minus dolore quae hic soluta earum fuga, numquam consequuntur
      animi nulla.
    </p>
  </div>
);

const Contact = () => (
  <div className="about">
    <h1>Contact Me</h1>
    <p>
      You can reach me via email <strong>randycweb@gmail.com</strong>
    </p>
  </div>
);

export default Main;
