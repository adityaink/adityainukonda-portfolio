
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Savr",
      position: "Founder/Software Developer",
      duration: "Jan 2025 - Present",
      location: "Aldie, VA",
      description: [
        "Developing a food delivery platform tailored for niche Indian restaurants to reduce reliance on third-party services",
        "Integrated a cost-effective delivery system by partnering with local drivers and implementing an optimized route-planning algorithm",
        "Conducting market research and customer validation by interviewing restaurant owners to understand pain points",
        "Building a full-stack web and mobile app using React Native, Node.js, and PostgreSQL"
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Route Optimization"]
    },
    {
      company: "Citi Bank",
      position: "Software Engineer Intern",
      duration: "Summer 2024",
      location: "Remote",
      description: [
        "Engineered a real-time stock monitoring system using JavaFX, Gradle, and Yahoo API to store 3,600+ Dow Jones prices per hour, displaying live updates every 5 seconds with a line graph (17.2k updates/day)",
        "Improved Citi's stock analysis capability by creating UML and data flow diagrams, researching machine learning models for credit risk assessment, and building a Java-based real-time risk visualization tool"
      ],
      technologies: ["Java", "JavaFX", "Gradle", "Yahoo API", "UML", "Machine Learning"]
    },
    {
      company: "Wells Fargo",
      position: "Software Engineer Intern",
      duration: "April 2024 - May 2024",
      location: "Remote",
      description: [
        "Drafted a detailed and accurate visual representation of the data as an entity relationship diagram (ERD)",
        "Used the IntelliJ developer application to implement the ERD structure efficiently and published it to GitHub",
        "Understood and analyzed relevant technical requirements for building a system to manage customer portfolios"
      ],
      technologies: ["IntelliJ", "ERD Design", "GitHub", "System Architecture"]
    },
    {
      company: "George Mason University - College of Engineering",
      position: "Teaching Assistant",
      duration: "Fall 2023 - Spring 2024",
      location: "Fairfax, VA",
      description: [
        "Led weekly lab sessions and provided support to help students debug and improve programming assignments",
        "Instructed Java and Python to over 2,100 undergraduate students across 5 semesters, emphasizing code readability"
      ],
      technologies: ["Java", "Python", "Teaching", "Debugging"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "George Mason University",
      duration: "2020 - 2024",
      location: "Fairfax, VA",
      details: [
        "GPA: 3.51/4.0",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Machine Learning",
        "Focus on full-stack development and software engineering principles",
        "Active participant in computer science community and technical projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey from internships at major financial institutions to founding my own startup.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-1">{exp.position}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-1">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{edu.school}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
