
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Here's how you can reach me!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-pink-200 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">adityainukonda@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-pink-200 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">571-733-1493</p>
                </div>
              </div>
              
              {/* <div className="flex items-center gap-4">
                <div className="bg-pink-200 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Aldie, VA</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-pink-300 bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" className="w-full border-pink-300 focus:border-pink-400 rounded-lg" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" className="w-full border-pink-300 focus:border-pink-400 rounded-lg" />
                  </div>
                </div>
                
                <div>
                  <Input type="email" placeholder="Email Address" className="w-full border-pink-300 focus:border-pink-400 rounded-lg" />
                </div>
                
                <div>
                  <Input placeholder="Subject" className="w-full border-pink-300 focus:border-pink-400 rounded-lg" />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your message..." 
                    className="w-full min-h-[120px] resize-none border-pink-300 focus:border-pink-400 rounded-lg"
                  />
                </div>
                
                <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default Contact;
