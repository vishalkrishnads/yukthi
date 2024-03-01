import { NextSeo } from "next-seo";

export default function Title({ title, description, route }) {
  return <NextSeo
      title={title}
      description={description}
      canonical="https://www.yukthi.org/"
      openGraph={{
        url: `https://www.yukthi.org${route}`,
        title,
        description,
        images: [
          {
            url: 'https://yukthi.org/seo.png',
            width: 800,
            height: 740,
            alt: 'Yukthi - Solve.Create.Thrive',
            type: 'image/png',
          }
        ],
        siteName: 'Yukthi',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />;
}
