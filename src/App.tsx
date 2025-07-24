// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Introduction />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
