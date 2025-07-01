
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Clock, CheckCircle, Users, Globe, Leaf, Zap, Shield, Award, User } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Charelle Auto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of automotive excellence with revolutionary technology, 
              sustainable innovation, and uncompromising quality.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Car className="w-32 h-32 text-purple-500" />
              </div>
            </div>
            
            <div className="animate-fade-in delay-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Charelle Auto, we're not just building cars – we're crafting the future of transportation. 
                Our mission is to revolutionize the automotive industry through innovative design, cutting-edge 
                technology, and sustainable practices that benefit both our customers and the planet.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every vehicle we create represents our commitment to excellence, safety, and environmental 
                responsibility. We believe that the perfect car should seamlessly blend performance, luxury, 
                and sustainability without compromise.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    Continuously pushing the boundaries of automotive technology to deliver breakthrough solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in delay-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Safety</h3>
                  <p className="text-gray-600">
                    Prioritizing the safety of our customers with advanced security features and rigorous testing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in delay-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
                  <p className="text-gray-600">
                    Maintaining the highest standards in design, manufacturing, and customer service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                      Founded in 2005 by a team of visionary engineers and designers, Charelle Auto began as a 
                      dream to create vehicles that would redefine the automotive landscape. What started as a 
                      small startup in a garage has grown into a global leader in automotive innovation.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Our breakthrough came in 2015 with the launch of our first electric vehicle, which 
                      combined unprecedented performance with zero emissions. This success paved the way for 
                      our expansion into luxury, sport, and family vehicle segments.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Today, Charelle Auto operates in over 50 countries, with state-of-the-art manufacturing 
                      facilities and research centers worldwide. We've sold over 2 million vehicles and continue 
                      to lead the industry in sustainable transportation solutions.
                    </p>
                    <p className="text-gray-600">
                      As we look to the future, we remain committed to our founding principles: innovation, 
                      sustainability, and customer satisfaction. Every day, we work to make transportation 
                      cleaner, safer, and more enjoyable for everyone.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                  2M+
                </div>
                <p className="text-gray-600">Vehicles Sold</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in delay-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                  50+
                </div>
                <p className="text-gray-600">Countries</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in delay-500">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                  15+
                </div>
                <p className="text-gray-600">Awards Won</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in delay-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                  98%
                </div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Meet the visionary leaders driving Charelle Auto towards a sustainable and innovative future.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Charelle Khoury", role: "CEO & Founder", description: "Visionary leader with 20+ years in automotive innovation." },
                { name: "Michelle Khoury", role: "CTO", description: "Technology expert specializing in electric vehicle systems." },
                { name: "John Doe", role: "Head of Design", description: "Award-winning designer with a passion for sustainable aesthetics." }
              ].map((member, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-12 h-12 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
