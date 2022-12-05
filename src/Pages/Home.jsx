import React from "react";
import Container from "../components/Containers/Container";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import Slider from "../components/Sliders/Slider";
import {Helmet} from "react-helmet";

export default function Home() {
    return (
        <>
        <Helmet>
            <title>Tải Hình Ảnh Đẹp Từ Kho Hình Ảnh Miễn Phí - PixaPay</title>
            <meta name="description" content="home" />
        </Helmet>
            <Header />
            <Container
                heading="Kho hình ảnh đẹp miễn phí chất lượng cao"
                note="Kho hình ảnh đẹp miễn phí với hơn 1 triệu hình ảnh và video được chia sẻ bởi cộng đồng tài năng của chúng tôi."
                search="All image"
            />
            <Content />
            <Slider />
            <Note />
            <Footer />
        </>
    );
}
