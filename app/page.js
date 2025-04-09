import Image from "next/image";

import Hero from "./Components/Hero";
import { NavbarDemo } from "./Components/NavbarDemo";

export default function Home() {
  return (
    <div >
    <NavbarDemo/>
    <Hero />
    </div>
  );
}
