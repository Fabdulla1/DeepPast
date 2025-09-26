import React from 'react';
import Head from '@docusaurus/Head';

const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Deep Past Initiative",
    "url": "https://www.deeppast.org",
    "logo": "https://www.deeppast.org/img/dpi_logo.JPG",
    "description": "A global initiative to digitize ancient cuneiform tablets through crowdsourcing and innovative technology",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "awl@deeppast.org",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://discord.gg/XtCMyTrVCF"
    ],
    "keywords": [
      "cuneiform tablets",
      "ancient history",
      "digitization",
      "crowdsourcing",
      "archaeology",
      "mesopotamia",
      "historical preservation"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Deep Past Initiative",
    "url": "https://www.deeppast.org",
    "description": "Join the global challenge to digitize 22,000+ ancient cuneiform tablets. Win prizes while preserving human history through crowdsourcing technology.",
    "publisher": {
      "@type": "Organization",
      "name": "Deep Past Initiative",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.deeppast.org/img/dpi_logo.JPG"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.deeppast.org/challenge/intro?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const competitionData = {
    "@context": "https://schema.org",
    "@type": "Competition",
    "name": "Ancient Cuneiform Tablet Digitization Challenge",
    "description": "Global competition to help digitize over 22,000 ancient cuneiform tablets",
    "url": "https://www.deeppast.org/challenge/intro",
    "organizer": {
      "@type": "Organization",
      "name": "Deep Past Initiative",
      "url": "https://www.deeppast.org"
    },
    "award": "Prizes for top contributors",
    "about": {
      "@type": "Thing",
      "name": "Ancient History Preservation",
      "description": "Digitization and preservation of Mesopotamian cuneiform tablets"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(competitionData)}
      </script>
    </Head>
  );
};

export default StructuredData;