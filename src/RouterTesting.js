import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { VideoApp } from "./VideoApp";
import VideoSearch from "./VideoSearch";
import VideoSearching from "./VideoSearching";

export default function RouterTesting() {
    return (
    //   <>
        
    //   <BrowserRouter>
    //     <Routes>
    //       {/* <Route path="/" element={<Layout />}> */}
    //         <Route index element={<Home />} />

    //         <Route path="blogs" element={<Blogs />} />
    //         <Route path="contact" element={<Contact />} />
    //         <Route path="*" element={<NoPage />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    
    //   </>

    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/videosearching" element={<VideoSearching/>}/>
      </Routes>
      </BrowserRouter>
      </>
    );
  }