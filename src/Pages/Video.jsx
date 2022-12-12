import React from "react";
import Container from "../components/Containers/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import { Helmet } from "react-helmet";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SlideVideo from "../components/Sliders/SliderVideo";

export default function Video() {
    return (
        <>
            <Helmet>
                <title>Kho video miễn phí chất lượng HD & 4K - PixaPay</title>
                <meta name="description" content="Video" />
            </Helmet>
            <Header />
            <Container
                heading="Kho video miễn phí chất lượng HD & 4K"
                note="Kho video miễn phí với hàng ngàn video clip được chia sẻ bởi cộng đồng tài năng của chúng tôi."
                search="Video"
            />
            <NavigationBar />
            <SlideVideo />
            <Note />
            <Footer />
        </>
    );
}
