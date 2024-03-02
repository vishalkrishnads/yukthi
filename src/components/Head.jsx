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
    description: "Solve. Create. Thrive. Yukthi '24 is the annual inter-college tech fest of STIST. Come join the fun."
  }

  const welcomePhrase = {
    title: 'An event from Yukthi!',
    description: "We are so excited for you to be a part of Yukthi '24! Click that register now button and we hope to see you there..."
  }
  
  let phrase = defaultPhrase
  if(route !== undefined) phrase = route.startsWith('/events/') ? welcomePhrase : defaultPhrase

  // Check if the route exists in phrases, if not use the default phrase
  let { title, description } = phrases[route] || phrase;

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
            width: 1200,
            height: 630,
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

