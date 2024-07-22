import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";
import DefaultFooter from "@/components/footer/default";

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Provider store={store}>
          <Outlet />
          <SrollTop />
        </Provider>
      </main>
      <DefaultFooter />
    </div>
  );
}
