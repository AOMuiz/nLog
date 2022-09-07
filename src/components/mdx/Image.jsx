import { useState } from "react";
import NextImage from "next/image";

export default function Image({ src, alt, width, height, blurDataURL }) {
  const [loaded, setLoaded] = useState(false);
  const zoom = loaded ? "zoom" : "";

  return (
    <div className="container">
      <div className={zoom}>
        <NextImage
          onLoadingComplete={() => setLoaded(true)}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          placeholder={blurDataURL ? "blur" : undefined}
          blurDataURL={blurDataURL}
        />
      </div>

      <style jsx>
        {`
          .container {
            overflow: hidden;
          }

          .zoom {
            animation: zoom 0.3s linear;
          }

          @keyframes zoom {
            from {
              transform: scale(1.1);
            }
          }
        `}
      </style>
    </div>
  );
}
