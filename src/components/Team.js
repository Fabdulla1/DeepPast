import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import "../css/custom.scss";

// Team data for Deep Past Initiative
const team = [
  {
    name: "Gojko Barjamovic",
    title: "Member of the Board",
    imageURL: "img/pfp/gojko.jpg",
    href: "#",
  },
  {
    name: "Agnete Lassen",
    title: "Member of the Board",
    imageURL: "img/pfp/agnete.jpg",
    href: "#",
  },
  {
    name: "Ruchir Agarwal",
    title: "Member of the Board",
    imageURL: "img/pfp/ruchir.jpg",
    href: "#",
  },
  {
    name: "Adam Anderson",
    title: "Prize Administrator",
    imageURL: "img/pfp/adam_anderson.png",
    href: "#",
  },
  {
    name: "Farhan Abdulla",
    title: "Data Scientist",
    imageURL: "img/pfp/farhan_abdulla.jpg",
    href: "#",
  },
  {
    name: "Ed Stanford",
    title: "Research Fellow",
    imageURL: "img/pfp/ed_stratford.jpg",
    href: "#",
  },
  {
    name: "Taha Yurttaş",
    title: "Research Assistant",
    imageURL: "img/pfp/Taha_Yurttas.jpg",
    href: "#",
  },
];

const Card = ({ person }) => (
  <div className="group cursor-pointer">
    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
      <div className="relative">
        {person.imageURL ? (
          <img
            alt={`Photo of ${person.name}`}
            src={person.imageURL}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to initials if image fails to load
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-105 ${
            person.imageURL ? 'hidden' : 'flex'
          }`}
        >
          {person.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
          {person.name}
        </h3>
        <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 opacity-70">
          {person.title}
        </p>
      </div>
    </div>
  </div>
);

export default function Team() {
  return (
    <section id="our-team" className="mb-24 md:mb-36 px-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div className="w-full max-w-screen-2xl mx-auto z-30 relative">
        <div className="flex flex-col pt-8 md:pt-16">
          <h1 className="text-3xl md:text-6xl font-black !mb-5 leading-none tracking-tighter mb">
            Our Team
            <br />
          </h1>
          <div className="max-w-6xl md:text-xl text-lg font-medium !mb-8 md:w-full !leading-[110%] tracking-tight opacity-60">
            <span className="text-2xl text-yellow-500 dark:text-yellow-500 font-bold">
              Meet the minds driving innovation at the intersection of ancient history and cutting-edge technology
            </span>
            <br />
            <br />
            Our diverse team of researchers, engineers, historians, and data scientists work together to unlock the mysteries of the ancient world. 
            From cuneiform script analysis to machine learning algorithms, each team member brings unique expertise to our mission of making 
            ancient knowledge accessible to modern scholarship and the public.
            <br />
            <br />
            <span className="font-bold">Bridging millennia through technology and human insight.</span>
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12">
            {team.map((person) => (
              <Card person={person} key={person.name} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-start">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-yellow-500 dark:text-yellow-400">
                {team.length}
              </div>
              <div className="text-sm md:text-base font-medium opacity-60 tracking-wide">
                Team Members
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-yellow-500 dark:text-yellow-400">
                12+
              </div>
              <div className="text-sm md:text-base font-medium opacity-60 tracking-wide">
                Disciplines
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-yellow-500 dark:text-yellow-400">
                Global
              </div>
              <div className="text-sm md:text-base font-medium opacity-60 tracking-wide">
                Reach
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Partners section component
export function Partners() {
  const partners = [
    {
      name: "Kaggle",
      link: "https://www.kaggle.com/",
      logo: "https://www.kaggle.com/static/images/site-logo.svg",
    },
    {
      name: "Global Talent Fund",
      link: "https://www.globtalent.org/",
      logo: "https://cdn.prod.website-files.com/667539b43fb596c83ded3ca2/6723e5c178e9f352bde27c68_GTF-LOGO.svg",
    },
    {
      name: "Founder's Pledge",
      link: "https://www.founderspledge.com/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Founders_Pledge_logo.png",
    },
    {
      name: "TokenWorks LLC",
      link: "https://www.tokenworks.ai/",
      logo: "https://www.tokenworks.ai/tokenworks_logo.png",
    },
  ];

  return (
    <section id="our-partners" className="mb-24 md:mb-36 px-6 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent">
      <div className="w-full max-w-screen-2xl mx-auto z-30 relative">
        <div className="flex flex-col pt-8 md:pt-16">
          <h1 className="text-3xl md:text-6xl font-black !mb-5 leading-none tracking-tighter mb">
            Our Partners
            <br />
          </h1>
          <div className="max-w-6xl md:text-xl text-lg font-medium !mb-8 md:w-full !leading-[110%] tracking-tight opacity-60">
            <span className="text-2xl text-yellow-500 dark:text-yellow-500 font-bold">
              Collaborating with leading organizations to unlock the mysteries of the ancient world
            </span>
            <br />
            <br />
            Our partners share our vision of making ancient knowledge accessible through modern technology. 
            Together, we're building bridges between past and present, combining expertise in machine learning, 
            historical research, and global talent development.
          </div>
        </div>
        
        {/* Partners Grid */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {partners.map((partner) => (
              <a 
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-yellow-400 dark:hover:border-yellow-500 hover:shadow-lg hover:bg-white dark:hover:bg-gray-800/50">
                  <div className="w-40 h-40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter dark:brightness-0 dark:invert"
                      onError={(e) => {
                        // Fallback to initials if logo fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-xl font-bold shadow-md hidden"
                    >
                      {partner.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Visit Website →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
