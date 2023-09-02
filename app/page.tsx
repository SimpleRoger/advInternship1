import Image from "next/image";
import styles from "./page.module.css";
import Navbar1 from "@/components/Navbar1";
import Landing1 from "@/components/Landing1";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Numbers from "@/components/Numbers";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal"

export default function Home() {
  return (
    <>
      <AuthModal />
      <Navbar1 />
      <Landing1 />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
