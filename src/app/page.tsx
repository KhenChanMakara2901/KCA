import Image from "next/image";
import { ImagesSliderDemo } from "./Hero/Hero-ui";
import Profile from "../components/Profile/Profile";
import Feature from "../components/Feature/Feature";
import Card from "../components/Card/Card";
import Testimonial from "../components/Testimonials/Testimonial";
import CTA from "../components/Call-to-Actoin/CTA";

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <Profile />
      <Feature />
      <Card />
      <Testimonial />
      <CTA />
    </>
  );
}
