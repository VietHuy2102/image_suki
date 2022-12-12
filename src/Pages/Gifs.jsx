import React from "react";
import Container from "../components/Containers/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import {Helmet} from 'react-helmet'
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SliderHome from "../components/Sliders/SliderHome";

export default function Gifs() {
    return (
        <>
        <Helmet>
                <title>
                    Hơn 1496 Nhãn dán và Gif động để bạn tải xuống miễn phí- PixaPay
                </title>
                <meta name="description" content="Gifs" />
            </Helmet>
            <Header />
            <Container
                heading="Nhãn dán và GIF miễn phí để tải xuống"
                note="Nhãn dán và GIF động miễn phí cực đỉnh được cộng đồng tài năng của chúng tôi chia sẻ."
                search="GIF"
            />
            <NavigationBar />
            <SliderHome />
            <Note />
            <Footer />
        </>
    );
}
