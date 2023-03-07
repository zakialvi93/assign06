import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";

import Layout from "./Layout";

export default function RouterTesting() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }