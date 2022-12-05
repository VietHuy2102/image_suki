import React from "react";
import Container from "../components/Containers/Container";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import Slider from "../components/Sliders/Slider";
import { Helmet } from "react-helmet";

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
            <Content />
            <Slider />
            <Note />
            <Footer />
        </>
    );
}
