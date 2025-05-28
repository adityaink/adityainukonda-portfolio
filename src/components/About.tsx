
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in React, Node.js, and modern web technologies"
    },
    {
      icon: Lightbulb,
      title: "Machine Learning",
      description: "Applied ML techniques for credit risk assessment and data analysis"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Teaching assistant with experience mentoring students"
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Strong analytical skills with focus on optimization and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Computer Science graduate from George Mason University with a 3.51/4.0 GPA. 
            Passionate about building innovative software solutions and leveraging technology 
            to solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
            {/* <p className="text-gray-600 mb-4 leading-relaxed">
              As a recent graduate from George Mason University, I've developed expertise in 
              full-stack development, machine learning, and software engineering. My experience 
              spans from founding a personal startup focused on food delivery optimization to 
              working as a software engineer intern at major financial institutions.
            </p> */}
            {/* <p className="text-gray-600 leading-relaxed">
              I'm particularly passionate about creating efficient, user-centered solutions 
              and have experience in everything from real-time data visualization to mobile 
              app development. I thrive in collaborative environments and enjoy teaching 
              and mentoring others.
            </p> */}
          </div> */}
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-pink-300 bg-white hover:scale-105">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C/C++', 'JavaScript', 'HTML/CSS', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-pink-300 hover:bg-pink-50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'Firebase', 'Git', 'MongoDB'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-pink-300 hover:bg-pink-50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Concepts & Others</h4>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Data Structures', 'Algorithms', 'REST APIs', 'Agile'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-pink-300 hover:bg-pink-50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
