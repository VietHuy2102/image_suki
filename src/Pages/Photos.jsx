import React from "react";
import Container from "../components/Containers/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import {Helmet} from "react-helmet"
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SlidePhoto from "../components/Sliders/SlidePhoto";

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
            <NavigationBar />
            <SlidePhoto />
            <Note />
            <Footer />
        </>
    );
}
