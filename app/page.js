import Image from "next/image";
import Hero from "./Components/Hero";
import { NavbarDemo } from "./Components/NavbarDemo";
import About from "./Components/About";
import { GlowingEffectDemoSecond } from "./Components/GlowingEffectDemoSecond";
import Doit from "./Components/Doit";

// import Word from "./Components/Word";





export default function Home() {
  return (
    <div >
    <NavbarDemo/>
    <Hero />
    <About/>
    <GlowingEffectDemoSecond/>
    <Doit/>

      </div>
  );
}
