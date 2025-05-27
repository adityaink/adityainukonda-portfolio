
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Mini PhotoBooth App",
      description: "Developed a full-featured photo booth application that allows users to take, customize, and download pictures. Built with interactive UI and smooth user experience.",
      image: "https://images.unsplash.com/photo-1551021794-03be4ddaf67d?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML/CSS", "Git", "Firebase", "Netlify"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Rewards Program System",
      description: "Implemented a comprehensive customer rewards program with REST API integration. Utilized PostgreSQL for secure data storage and created user authentication system.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Java", "PostgreSQL", "Springboot", "Splunk", "JMeter"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Netflix Movie Recommender AI",
      description: "Processed 500+ films from TMDB database using cosine similarity to recommend movies based on features like genre, title, and cast. Created intelligent recommendation engine.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop",
      technologies: ["Python", "Kaggle", "NumPy", "Streamlit"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Real-time Stock Monitor",
      description: "Built during Citi internship - real-time stock monitoring system that tracks 3,600+ Dow Jones prices per hour with live updates every 5 seconds.",
      image: "https://international.schwab.com/sites/g/files/eyrktu651/files/UnderstandingStocks.jpg",
      technologies: ["Java", "JavaFX", "Gradle", "Yahoo API"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Savr- Food Delivery Platform",
      description: "Currently developing a specialized food delivery platform for Indian restaurants with optimized route planning and local driver integration.",
      image: "https://anindianzaika.com/wp-content/uploads/2023/07/Top-Indian-Restaurant-For-Lunch-Specials-In-Niagara-Falls-NY.jpg",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Route Optimization"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Credit Risk Assessment Tool",
      description: "Machine learning-based tool for credit risk assessment with real-time data visualization, built during Wells Fargo internship with comprehensive ERD design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Java", "Machine Learning", "ERD", "IntelliJ"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-rose-100 via-pink-50 to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects ranging from full-stack applications to machine learning solutions 
            and real-time data systems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-pink-300 bg-white hover:scale-[1.02]">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-pink-400 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white rounded-full">
                    <a href={project.github} className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-pink-400 hover:bg-pink-500 rounded-full">
                    <a href={project.demo} className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-pink-300 bg-white hover:scale-105">
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-pink-100 text-pink-700 border-pink-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white rounded-full">
                      <a href={project.github}>
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-pink-400 hover:bg-pink-500 rounded-full">
                      <a href={project.demo}>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
