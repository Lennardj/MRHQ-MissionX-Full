import HomeHero from "../Home/HomeHero";
import HomeOffer from "../Home/HomeOffer";
import HomePathways from "../Home/HomePathways";
import Navbar from "../Home/HomeNavbar.js";
import HomeWaiting from "../Home/HomeWaiting.js";
import HomeFooter from "../Home/HomeFooter.js";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <HomeOffer></HomeOffer>
      <HomePathways></HomePathways>
      <HomeWaiting></HomeWaiting>
      <HomeFooter></HomeFooter>
    </>
  );
}
