import React from "react";
import Container from "../components/Containers/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";

import {Helmet} from "react-helmet"
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SlideIllustration from "../components/Sliders/SlideIllustration";

export default function Illustration() {
    return (
        <>
        <Helmet>
            <title>Tải hình ảnh minh họa từ kho illustration miễn phí-Pixabay</title>
            <meta name="description" content="Illustration" />
        </Helmet>
            <Header />
            <Container
                heading=" Tải hình ảnh minh họa từ kho illustration miễn phí"
                note="Kho illustration miễn phí với hơn 160,000 hình ảnh minh hoạ được chia sẻ bởi cộng đồng tài năng của chúng tôi."
                search="Minh họa"
            />
            <NavigationBar />
            <SlideIllustration />
            <Note />
            <Footer />
        </>
    );
}