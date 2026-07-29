"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithBlurProps extends Omit<ImageProps, "onLoad"> {
  className?: string;
  containerClassName?: string;
}

export function ImageWithBlur({
  src,
  alt,
  className = "",
  containerClassName = "",
  ...props
}: ImageWithBlurProps) {
  const [isLoading, setIsLoading] = useState(true);

  const hasObjectPos =
    className.includes("object-top") ||
    className.includes("object-bottom") ||
    className.includes("object-[");
  const defaultPos = hasObjectPos ? "" : "object-center";

  return (
    <Image
      src={src}
      alt={alt}
      onLoad={() => setIsLoading(false)}
      className={`object-cover ${defaultPos} w-full h-full transition-all duration-500 ease-out ${
        isLoading ? "blur-sm opacity-80 scale-105" : "blur-none opacity-100 scale-100"
      } ${className}`}
      {...props}
    />
  );
}

export default ImageWithBlur;
