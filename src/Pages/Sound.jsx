import React from "react";
import Container from "../components/Containers/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import { Helmet } from "react-helmet";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SliderHome from "../components/Sliders/SliderHome";

export default function Sound() {
    return (
        <>
            <Helmet>
                <title>
                    Hơn 110000 hiệu ứng âm thanh miễn phí để tải xuống - PixaPay
                </title>
                <meta name="description" content="Sound" />
            </Helmet>
            <Header />
            <Container
                heading="Hiệu ứng âm thanh miễn phí bản quyền để tải xuống"
                note="Hơn 110000 hiệu ứng âm thanh miễn phí được cộng đồng tài năng của chúng tôi chia sẻ."
                search="Hiệu ứng âm thanh"
            />
            <NavigationBar />
            <SliderHome />
            <Note />
            <Footer />
        </>
    );
}
