import React from "react";
import Container from "../components/Containers/Container";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import Slider from "../components/Sliders/Slider";
import {Helmet} from "react-helmet"

export default function Photos() {
    return (
        <>
        <Helmet>
            <title>Tải Ảnh Đẹp Từ Kho Hình Ảnh Miễn Phí - PixaPay</title>
            <meta name="description" content="home" />
        </Helmet>
            <Header />
            <Container
                heading=" Kho ảnh đẹp miễn phí chất lượng cao"
                note="Kho ảnh đẹp miễn phí với hơn 1 triệu ảnh và video được chia sẻ bởi cộng đồng tài năng của chúng tôi."
                search="Ảnh"
            />
            <Content />
            <Slider />
            <Note />
            <Footer />
        </>
    );
}
