import {
  renderRichText,
  storyblokEditable,
} from "@storyblok/react/rsc";

import Image from "next/image";

export const Tour = ({ blok }: any) => {
  return (
    <main {...storyblokEditable(blok)}
      className="container mx-auto px-4 w-full pt-32 pb-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold">{blok.name}</h1>
      <Image
        className="mt-12"
        src={blok.main_image.filename}
        alt={blok.main_image.alt}
        width={blok.main_image.filename.split("/")[5].split("x")[0]}
        height={blok.main_image.filename.split("/")[5].split("x")[1]}
        sizes="(max-width: 1538px) 100vw, 1504px"
        priority={true}
      />
      {/* <img src={blok.main_image.filename} className='mt-12'></img> */}
      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {blok.introduction}
      </p>
      <div
        className="prose md:prose-lg mt-16 max-w-none"
        dangerouslySetInnerHTML={{
          __html:
            renderRichText(blok.body, {
              resolver: {
                image: (node: any) => {
                  const [width, height] = node.attrs.src
                    ?.split("/")[5]
                    ?.split("x") || [1504, 0];
                  return `<img 
                    src="${node.attrs.src}/m/1504x0/filters:quality(75)"
                    alt="${node.attrs.alt || ''}"
                    loading="lazy"
                    width="${width}"
                    height="${height}"
                  />`;
                },
              },
            }) ?? "",
        }}
      ></div>
    </main>
  )
};