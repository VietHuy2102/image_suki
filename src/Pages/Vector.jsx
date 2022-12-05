import React from "react";
import Container from "../components/Containers/Container";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import Slider from "../components/Sliders/Slider";
import {Helmet} from "react-helmet"
export default function Vector() {
    return (
        <>
         <Helmet>
            <title>Kho ảnh vector miễn phí-Pixabay</title>
            <meta name="description" content="Illustration" />
        </Helmet>
            <Header />
            <Container
                heading="Kho ảnh vector miễn phí"
                note="Kho vector miễn phí với hơn 70,000 hình ảnh vector được chia sẻ bởi cộng đồng tài năng của chúng tôi."
                search="Vectors"
            />
            <Content />
            <Slider />
            <Note />
            <Footer />
        </>
    );
}