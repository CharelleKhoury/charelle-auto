import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Car, CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import type { ApiCar } from '@/data/mockCars';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ScheduleTestDrive = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    carModel: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
 const [carModels, setCarModels] = useState<ApiCar[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const makes = [
        'honda', 'toyota', 'ford', 'bmw', 'chevrolet',
        'nissan', 'hyundai', 'kia', 'mazda', 'mercedes-benz'
      ];
      let allCars: ApiCar[] = [];
      for (const make of makes) {
        try {
          const response = await fetch(
            `https://api.api-ninjas.com/v1/cars?make=${make}`,
            {
              headers: {
                'X-Api-Key': 'KW5P3sZq7Fs+gljffV6xLA==XKBpMxduJile0gSk',
              },
            }
          );
          const data: ApiCar[] = await response.json();
          if (Array.isArray(data)) allCars = allCars.concat(data);
        } catch (error) {
          // Ignore errors for individual makes
        }
      }
      setCarModels(allCars);
    };
    fetchCars();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Test drive scheduled:', formData);
    setIsSubmitted(true);
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const locations = [
    'Downtown Showroom',
    'North Branch',
    'South Branch',
    'East Branch',
    'West Branch'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <Navigation />
        <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
          <Card className="bg-white/80 backdrop-blur-md border-purple-200 shadow-xl max-w-md w-full">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Test Drive Scheduled!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for scheduling your test drive. We'll contact you within 24 hours to confirm your appointment.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Car:</strong> {formData.carModel}</p>
                <p><strong>Date:</strong> {formData.preferredDate}</p>
                <p><strong>Time:</strong> {formData.preferredTime}</p>
                <p><strong>Location:</strong> {formData.location}</p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Schedule Another
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Schedule Your Test Drive
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of driving. Book your personalized test drive and discover why Charelle Auto is the perfect choice for you.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose your preferred date and time that works best for you</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Car className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Experience</h3>
                <p className="text-gray-600">Test drive any model with our expert sales team</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Multiple Locations</h3>
                <p className="text-gray-600">Visit any of our convenient showroom locations</p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <Card className="bg-white/80 backdrop-blur-md border-purple-200 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-purple-600" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-white/80 border-purple-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-white/80 border-purple-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-purple-600" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white/80 border-purple-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-white/80 border-purple-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Test Drive Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Car className="w-5 h-5 mr-2 text-purple-600" />
                    Test Drive Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Car Model *</label>
                      <Select value={formData.carModel} onValueChange={(value) => handleInputChange('carModel', value)}>
                    <SelectTrigger className="bg-white/80 border-purple-200">
                        <SelectValue placeholder="Select a car model" />
                    </SelectTrigger>
                    <SelectContent>
                    {carModels.map((car, idx) => (
                        <SelectItem key={idx} value={`${car.make} ${car.model} (${car.year})`}>
                        {car.make} {car.model} ({car.year})
                        </SelectItem>
                    ))}
                    </SelectContent>
                    {carModels.length === 0 && (
                    <div className="text-red-500 text-sm mt-2">No cars available</div>
                    )}
                    </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger className="bg-white/80 border-purple-200">
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    Preferred Date & Time
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className="bg-white/80 border-purple-200"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger className="bg-white/80 border-purple-200">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-purple-200 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold"
                >
                  Schedule My Test Drive
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ScheduleTestDrive;
