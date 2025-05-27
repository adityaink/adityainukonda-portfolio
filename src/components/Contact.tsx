
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for a developer to join your team, have a project in mind, 
              or just want to network, I'd love to hear from you. Here's how you can reach me:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">adityasriinukonda@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">571-733-1404</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Fairfax, VA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-pink-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" className="w-full border-pink-200 focus:border-pink-500" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" className="w-full border-pink-200 focus:border-pink-500" />
                  </div>
                </div>
                
                <div>
                  <Input type="email" placeholder="Email Address" className="w-full border-pink-200 focus:border-pink-500" />
                </div>
                
                <div>
                  <Input placeholder="Subject" className="w-full border-pink-200 focus:border-pink-500" />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your message..." 
                    className="w-full min-h-[120px] resize-none border-pink-200 focus:border-pink-500"
                  />
                </div>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border-pink-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to work together?</h3>
            <p className="text-gray-600 mb-6">
              I'm currently available for new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
