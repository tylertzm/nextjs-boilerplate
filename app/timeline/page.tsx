import { Timeline } from "../components/timelinedesign"

export default function TimelinePage() {
  const timelineItems = [
    {
      title: "Werkstudent at Cytosorbents EU GmbH",
      date: "July 2024 - January 2025",
      location: "Berlin, Germany",
      description: "Provided bilingual technical support and developed workflow automation solutions with Power Platforms. Collaborated on inventory app development and documented IT processes.",
      skills: ["Tech Support", "Power Platforms", "Documentation", "MS 365", "Python", "APIs"]
    },
    {
      title: "Werkstudent at CloudRebels GmbH",
      date: "January 2024 - June 2024",
      location: "Berlin, Germany",
      description: "Set up Windows/Mac devices for clients, managed IT inventory with Excel, and wrote Python scripts for various tasks.",
      skills: ["Windows/Mac Setup", "Excel", "Python", "IT Support"]
    },
    {
      title: "Bachelor of Informatics",
      date: "April 2023 - Present",
      location: "HTW Berlin (University of Applied Sciences)",
      description: "Currently in the 4th semester studying Computer Science with focus on AI and development.",
      skills: ["Python", "Java", "React", "HTML/CSS", "AI"]
    },
    {
      title: "GCE A-Levels",
      date: "January 2021 - June 2022",
      location: "Methodist College Kuala Lumpur, Malaysia",
      description: "Completed A-Levels with focus on sciences and mathematics plus German language studies.",
      skills: ["Biology", "Physics", "Mathematics", "German"]
    },
    {
      title: "IGCSE Certificate",
      date: "January 2019 - November 2020",
      location: "Campus Rangers Learning Centre, Malaysia",
      description: "Completed IGCSE with excellent results: 7A* 3A.",
      skills: ["Sciences", "Mathematics", "Languages"]
    }
  ]


  return (
    <div className="min-h-screen bg-[#ffffff] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="mb-16 text-3xl font-light tracking-wider text-neutral-800 border-b border-neutral-200 pb-4 max-w-xs">
          時間の流れ
          <span className="block text-sm mt-1 text-neutral-500">Flow of Time</span>
        </h1>

        <div className="max-w-2xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </div>
  )
}
