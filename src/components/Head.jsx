import { NextSeo } from "next-seo";

export default function Title({ route }) {

  const phrases = {
    '/signup': {
      title: 'SignUp - Yukthi',
      description: "Sign up with a new account to view your registrations for Yukthi '24"
    },
    '/events': {
      title: 'Events - Yukthi',
      description: "See what's happening at Yukthi '24"
    },
    '/teams': {
      title: 'Teams - Yukthi',
      description: "Meet the team behind Yukthi '24"
    },
    '/soon': {
      title: 'Coming soon - Yukthi',
      description: "See what's coming up for Yukthi '24"
    }    
  }

  const defaultPhrase = {
    title: "Yukthi '24",
    description: "Solve. Create. Thrive."
  }

  // Check if the route exists in phrases, if not use the default phrase
  const { title, description } = phrases[route] || defaultPhrase;

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
