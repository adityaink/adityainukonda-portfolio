
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <img
            src="/lovable-uploads/cbe67b38-e099-4d92-ba73-355746fc8f70.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-pink-200 shadow-lg object-cover"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Aditya Sri <span className="text-pink-400">Inukonda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Developer & Computer Science Graduate
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Recent George Mason University graduate with experience in full-stack development, 
            machine learning, and building scalable applications. Passionate about creating innovative 
            solutions and optimizing user experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/adityasri" className="text-gray-500 hover:text-pink-400 transition-colors duration-300">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/aditya-sri-inukonda" className="text-gray-500 hover:text-pink-400 transition-colors duration-300">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:adityasriinukonda@gmail.com" className="text-gray-500 hover:text-pink-400 transition-colors duration-300">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
