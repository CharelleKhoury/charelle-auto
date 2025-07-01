import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car, ArrowLeft, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Type for API response
interface ApiCar {
  city_mpg?: number;
  class: string;
  combination_mpg?: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg?: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

// Type for UI car object
interface UICar {
  name: string;
  year: number;
  price: string;
  description: string;
  specs: Record<string, string | number | undefined>;
  features: string[];
}

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState<UICar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchCar = async () => {
    setLoading(true);
    try {
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
      const foundCar = allCars[parseInt(id || '0')];
      if (foundCar) {
        setCar({
          name: `${foundCar.make} ${foundCar.model}`,
          year: foundCar.year,
          price: 'N/A', // API does not provide price
          description: `A ${foundCar.year} ${foundCar.make} ${foundCar.model} (${foundCar.class}).`,
          specs: {
            'Engine': `${foundCar.displacement}L ${foundCar.cylinders}-cyl`,
            'Drive': foundCar.drive,
            'Fuel Type': foundCar.fuel_type,
            'Transmission': foundCar.transmission === 'a' ? 'Automatic' : 'Manual',
          },
          features: [
            'Standard Features',
            'Bluetooth',
            'Backup Camera',
            'Cruise Control'
          ],
        });
      } else {
        setCar(null);
      }
    } catch (error) {
      setCar(null);
    }
    setLoading(false);
  };

  fetchCar();
}, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <Car className="w-16 h-16 text-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 text-xl">Loading Details...</p>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 text-xl mb-4">Car not found</p>
          <Link to="/models">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Back to Models
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <Navigation />
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/models" className="inline-flex items-center text-purple-600 hover:text-pink-600 mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Back to Models</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Car Image */}
            <div className="animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Car className="w-24 h-24 sm:w-32 sm:h-32 text-purple-500" />
              </div>
            </div>

            {/* Car Info */}
            <div className="animate-fade-in delay-300">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {car.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-purple-600 mb-2">Year: {car.year}</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-4 sm:mb-6">
                {car.price}
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                {car.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/schedule-test-drive" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-purple-400 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg">
                    Schedule Test Drive
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications and Features */}
          <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in delay-500">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Specifications</h3>
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(car.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-600 capitalize text-sm sm:text-base">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="text-purple-600 font-semibold text-sm sm:text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border-purple-200 shadow-lg animate-fade-in delay-700">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Features</h3>
                <div className="space-y-2 sm:space-y-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CarDetail;