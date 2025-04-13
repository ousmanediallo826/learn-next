"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export function ContainerTextFlipDemo() {
  const words = ["Google Cloud", "AI/ML", "Zowe", "IBM LinuxOne", "Cloud Computing", "Quantum Computing"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-full mx-25 text-center text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-6xl dark:text-zinc-100"
      )}
      layout>
      <div className="inline-block">
      Learn cutting-edge tools like <ContainerTextFlip words={words} />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
