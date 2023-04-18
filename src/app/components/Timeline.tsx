// components/VerticalTimeline.tsx
import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Freelance Developer',
    company: 'Spill Notify',
    date: 'No Specific Date',
    description: 'Developed a tool that allows users of a group to buy limited time items faster than others by monitoring the websites using HTTP requests. More info here.',
  },
  {
    id: 2,
    role: 'Junior Developer',
    company: 'Ambush.IO',
    date: 'Aug 2021 - Apr 2022',
    description: 'Used Python + Flask to develop the software for a SaaS with a team of developers. More info here.',
  },
  {
    id: 3,
    role: 'Developer/Owner',
    company: 'LiquidTools',
    date: 'Apr 2022 - Current',
    description: 'A SaaS start up I developed in my spare time that now has 200+ monthly paying users. Used Python + JS. More info here.',
  },
];

const VerticalTimeline: React.FC = () => {
  return (
    <div className="h-screen text-white py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
      <div className="container mx-auto px-6">
        <div className="relative w-full">
          <div className="border-l-2 border-purple-500 absolute left-1/2 transform -translate-x-1/2 h-full top-0"></div>
          {experiences.map((experience, index) => (
            <div key={experience.id} className={`relative my-6 w-1/3`}>
              {/* <div className="w-3 h-3 bg-purple-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-gray-900"></div> */}
              <div className={`bg-transparent border rounded-lg p-6`}>
                <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
                <h4 className="text-purple-300 mb-4">{experience.company}</h4>
                <p className="text-purple-200 mb-2">{experience.date}</p>
                <p className="text-white">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
