import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import Illustration from "./Pages/Illustration";
import Vector from "./Pages/Vector";
import Video from "./Pages/Video";
import Music from "./Pages/Music";
import Sound from "./Pages/Sound";
import Gifs from "./Pages/Gifs"
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
                <Route path="/music" element={<Music />} />
                <Route path="/sound-effects" element={<Sound />} />
                <Route path="/gifs" element={<Gifs />} />
            </Routes>
        </BrowserRouter>
    );
}
