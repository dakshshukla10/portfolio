import { BrowserRouter } from 'react-router-dom'; {/*This is like getting your roads for your Lego city. It's going to allow us to move between different parts of your website.*/}

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => { {/*This is where you start building your Lego city. 'App' is your whole city*/}
  return (
    <BrowserRouter> {/*This is like getting your roads for your Lego city. It's going to allow us to move between different parts of your website.*/}
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App; {/* Finally, when your city is built, you open it up for people to visit. This line is saying, "My city is ready, and anyone can come to see it!" */}
