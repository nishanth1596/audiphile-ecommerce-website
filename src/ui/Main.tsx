import { Outlet } from "react-router-dom";
import AboutUsSection from "../feature/about/AboutUsSection";
import GallerySection from "./GallerySection";

function Main() {
  return (
    <main className="">
      <Outlet />
      <GallerySection />
      <AboutUsSection />
    </main>
  );
}

export default Main;
