import { BrowserRouter as Router } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedback,
  Hero,
  Navbar,
  Tech,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Feedback />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
