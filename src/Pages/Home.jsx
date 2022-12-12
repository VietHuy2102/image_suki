import React from "react";
import Container from "../components/Containers/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Note from "../components/Note/Note";
import { Helmet } from "react-helmet";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SliderHome from "../components/Sliders/SliderHome";

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
      <NavigationBar />
      <SliderHome />
      <Note />
      <Footer />
    </>
  );
}
