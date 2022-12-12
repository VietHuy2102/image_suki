import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import Illustration from "./Pages/Illustration";
import Vector from "./Pages/Vector";
import Video from "./Pages/Video";
import Music from "./Pages/Music";
import Sound from "./Pages/Sound";
import Gifs from "./Pages/Gifs";
import SearchValue from "./Pages/SearchValue";
import VideoSearch from "./Pages/VideoSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/illustrations" element={<Illustration />} />
        <Route path="/vectors" element={<Vector />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/musics" element={<Music />} />
        <Route path="/sound-effects" element={<Sound />} />
        <Route path="/gifs" element={<Gifs />} />
        <Route path="/editors_choice" element={<SearchValue />} />
        <Route path="/images/search">
          <Route path="" element={<SearchValue />} />
          <Route path=":q" element={<SearchValue />} />
        </Route>
        <Route path="/videos/search/:q" element={<VideoSearch />} />
      </Routes>
    </BrowserRouter>
  );
}
