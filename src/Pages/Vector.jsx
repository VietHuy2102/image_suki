import React from "react";
import Container from "../components/Containers/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import {Helmet} from "react-helmet"
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SlideVector from "../components/Sliders/SlideVector";
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
            <NavigationBar />
            <SlideVector />
            <Note />
            <Footer />
        </>
    );
}