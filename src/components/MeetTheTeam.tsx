"use client";

import React from "react";

type TeamMemberProps = {
  name: string;
  title: string;
  bio: string;
  photoPlaceholderText?: string;
};

function TeamMember({ name, title, bio, photoPlaceholderText }: TeamMemberProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mb-16 max-w-5xl mx-auto px-6">
      {/* Photo container */}
      <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-lg font-semibold flex-shrink-0">
        {photoPlaceholderText || "Photo Placeholder"}
      </div>

      {/* Text container */}
      <div className="max-w-xl">
        <h3 className="text-3xl font-semibold mb-3">{name}</h3>
        <p className="italic text-blue-400 mb-5">{title}</p>
        <p className="text-lg leading-relaxed whitespace-pre-line">{bio}</p>
      </div>
    </div>
  );
}

// Smaller version only for grouped members
function GroupedTeamMember({ name, title, bio, photoPlaceholderText }: TeamMemberProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8 max-w-4xl mx-auto px-6">
      {/* Smaller photo */}
      <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-sm font-semibold flex-shrink-0">
        {photoPlaceholderText || "Photo Placeholder"}
      </div>

      {/* Smaller text */}
      <div className="max-w-lg">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="italic text-blue-400 mb-2">{title}</p>
        <p className="text-base leading-relaxed whitespace-pre-line">{bio}</p>
      </div>
    </div>
  );
}

export default function MeetTheTeam() {
  const individualMembers: TeamMemberProps[] = [
    {
      name: "CLINT MARTIN",
      title: "Managing Director / Owner",
      bio: `Clint is a strong man with a great heart and passion for his company, as well as his team and clients.
An entrepreneurial individual, a natural leader who thrives for quality service. He tends to be realistic, which means that he enjoys working outdoors and applying himself to a hands-on project.
Clint works as a team member, with great organisational and communication skills. He has a great ability to delegate tasks and stay calm under pressure, while problem solving innovatively. Flexible and has a great ability to prioritise. Clint has made long standing friendships with many of his customers over the 20+ years in the fencing industry.`,
      photoPlaceholderText: "Clint Martin Photo",
    },
    {
      name: "GAVIN MARTIN",
      title: "Project Supervisor / Son",
      bio: `Gavin’s attitude and demeanour are contagious and greatly influences the atmosphere in the workplace. He approaches each day and situation with positivity and optimism. In addition, he is focused on showing confidence both in himself and the team as well as ensuring quality service delivery.
Gavin shows constant passion for the company and its objectives and inspire his team members to share that excitement. Gavin leads by example as often as he leads by command.`,
      photoPlaceholderText: "Gavin Martin Photo",
    },
    {
      name: "GERHARDUS LOOTS (GERRIE)",
      title: "Project Supervisor",
      bio: `Gerrie works like a soldier, and he wears the same commitment when it comes to his work.
In addition to his commitment and skills, Gerrie is a motivated and dedicated team member. He consistently exceeds expectations and is always willing to go the extra mile. Gerrie is an asset to our team.
Gerrie is reliable, hardworking, and a positive influence on the team. In addition, he maintains the highest standards of quality and safety.`,
      photoPlaceholderText: "Gerhardus Loots Photo",
    },
  ];

  const groupedMembers: TeamMemberProps[] = [
    {
      name: "SAMSON",
      title: "Permanent member of the MC Fencing Team",
      bio: `Samson true to his name, is a very strong and very respectful man. His shoes shine every day when he arrives at work and this trait shows in the work he delivers each day!`,
      photoPlaceholderText: "Samson Photo",
    },
    {
      name: "SHANE",
      title: "Permanent member of the MC Fencing Team",
      bio: `Shane is the quiet one, he never complains, he is a wonderful worker and a man that takes pride in himself and his work.`,
      photoPlaceholderText: "Shane Photo",
    },
    {
      name: "JOHANNES",
      title: "Permanent member of the MC Fencing Team",
      bio: `Johannes is the more talkative member of the team. He enjoys working on his own to get the job done, takes initiative and a great team member.`,
      photoPlaceholderText: "Johannes Photo",
    },
    {
      name: "THATO",
      title: "Permanent member of the MC Fencing Team",
      bio: `Thato isn’t a big man, but he has a big spirit and always willing to help. Thato is an asset to the team.`,
      photoPlaceholderText: "Thato Photo",
    },
  ];

  return (
    <>
      <style>{`
        section::-webkit-scrollbar {
          display: none;
        }
        section {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

      <section
        className="bg-gray-900 text-white snap-y snap-mandatory overflow-y-scroll scroll-smooth"
        style={{ height: "100vh", scrollSnapType: "y mandatory" }}
      >
        {/* Intro Page */}
        <div
          className="snap-start flex flex-col items-center justify-center px-6 h-screen"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Meet the Team</h2>
          <div className="w-full max-w-4xl h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-xl font-semibold">
            Team Photo Placeholder
          </div>
        </div>

        {/* Individual Member Pages */}
        {individualMembers.map((member) => (
          <div
            key={member.name}
            className="snap-start flex items-center px-6 h-screen"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <TeamMember {...member} />
          </div>
        ))}

        {/* Grouped Members (1 page) */}
        <div
          className="snap-start px-6 flex flex-col justify-center items-center overflow-hidden"
          style={{ maxWidth: "900px", margin: "0 auto", height: "calc(100vh - 64px)" }}
        >
          {groupedMembers.map((member) => (
            <GroupedTeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>
    </>
  );
}