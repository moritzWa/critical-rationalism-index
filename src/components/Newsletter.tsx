"use client";

import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    if (!isBrowser) return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

function Newsletter() {
  const width = useWindowWidth();

  const newsLetterPartWidth = width > 768 ? "780" : width;
  console.log(width, newsLetterPartWidth);

  return (
    <div className="w-full m-auto">
      <iframe
        src="https://criticalrationalism.substack.com/embed"
        width={newsLetterPartWidth}
        height="320"
        // style={{"border:1px solid #EEE; background:white;"}}
        frameBorder="0"
        style={{ margin: "auto" }}
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Newsletter;
