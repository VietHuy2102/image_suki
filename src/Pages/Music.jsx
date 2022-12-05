import React from "react";
import Container from "../components/Containers/Container";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import Slider from "../components/Sliders/Slider";
import {Helmet} from "react-helmet";

export default function Music() {
    return (
        <>
        <Helmet>
            <title>Nhạc miễn phí bản quyền để tải xuống - PixaPay</title>
            <meta name="description" content="Music" />
        </Helmet>
            <Header />
            <Container
                heading="Nhạc miễn phí bản quyền để tải xuống"
                note="Hơn 110000 bản nhạc miễn phí được cộng đồng tài năng của chúng tôi chia sẻ."
                search="Âm nhạc"
            />
            <Content />
            <Slider />
            <Note />
            <Footer />
        </>
    );
}