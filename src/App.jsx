import React, {useState} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import GalleryTwo from "./components/GalleryTwo";
import Testimonian from "./components/Testimonian";
import Blog from "./components/Blog";
import NewsLetter from "./components/NewsLetter";
import End from "./components/End";







const App = () => {

const [mode, setMode] = useState("light"); 





  return (
  <>
  <div className={`${mode=="light" ? "bg-black" : "bg-gradient-to-r from-sky-600 to-black" }`}>
      <Header mode={mode} setMode={setMode}/>
      <Hero mode={mode} setMode={setMode}/>
      <Gallery mode={mode} setMode={setMode}/>
      <GalleryTwo mode={mode} setMode={setMode}/>
      <Testimonian mode={mode} setMode={setMode}/>
      <Blog mode={mode} setMode={setMode} />
      <NewsLetter />
      <End mode={mode} setMode={setMode}/>
  </div>
  
  
  
  </>
  );
};

export default App;
