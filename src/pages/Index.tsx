import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Car, Star, Zap, Shield, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Define a type for car data (only free fields)
interface ApiCar {
  class: string;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

// Helper to shuffle array
function shuffle<T>(array: T[]): T[] {
  return array
    .map((a) => [Math.random(), a] as [number, T])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

const Index = () => {
  const [allCars, setAllCars] = useState<ApiCar[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [recommendedCars, setRecommendedCars] = useState<ApiCar[]>([]);
  const [carouselTransition, setCarouselTransition] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const makes = [
        'honda', 'toyota', 'ford', 'bmw', 'chevrolet',
        'nissan', 'hyundai', 'kia', 'mazda', 'mercedes-benz'
      ];
      let cars: ApiCar[] = [];
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
          if (Array.isArray(data)) cars = cars.concat(data);
        } catch (error) {
          // Ignore errors for individual makes
        }
      }
      setAllCars(cars);
      setRecommendedCars(shuffle(cars).slice(0, 3));
    };
    fetchCars();
  }, []);


  // Carousel logic for featured cars (first 6, 3 at a time)
  const featuredCars = allCars.slice(0, 6);
  const carouselCars = [
    ...featuredCars.slice(carouselIndex, carouselIndex + 3),
    ...(carouselIndex + 3 > 6 ? featuredCars.slice(0, (carouselIndex + 3) % 6) : [])
  ];

  // Smooth carousel transition
  const handlePrev = () => {
    setCarouselTransition(true);
    setTimeout(() => {
      setCarouselIndex((prev) => (prev - 3 + 6) % 6);
      setCarouselTransition(false);
    }, 350);
  };

  const handleNext = () => {
    setCarouselTransition(true);
    setTimeout(() => {
      setCarouselIndex((prev) => (prev + 3) % 6);
      setCarouselTransition(false);
    }, 350);
  };

    // Helper for symmetrical grid
  const getGridCols = (count: number) => {
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 sm:grid-cols-2";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <Navigation />
      {/* ...Hero Section... */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-2xl animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        <div className="relative z-10 text-center text-gray-800 px-4 pt-16">
          <div className="mb-8 animate-fade-in">
            <Car className="w-20 h-20 mx-auto mb-6 text-purple-600 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            CHARELLE AUTO
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 animate-fade-in delay-500 max-w-3xl mx-auto">
            Experience the Future of Automotive Excellence with Revolutionary Design, 
            Cutting-Edge Technology, and Unmatched Performance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000 mb-16">
            <Link to="/models">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Models
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/schedule-test-drive">
              <Button variant="outline" className="border-2 border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Test Drive
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in delay-1300">
            <div className="text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Electric Power</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Advanced Safety</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Award Winning</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Premium Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our flagship vehicles that represent the pinnacle of automotive innovation and design excellence.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button variant="outline" onClick={handlePrev} disabled={featuredCars.length < 4}>
              <ArrowLeft />
            </Button>
            <div
              className={`grid ${getGridCols(carouselCars.length)} gap-8 justify-center transition-all duration-350 ease-in-out ${
                carouselTransition ? "opacity-60 scale-95" : "opacity-100 scale-100"
              }`}
              style={{ minHeight: 420 }}
            >
              {carouselCars.map((car, index) => (
                <Card key={index} className="flex flex-col bg-white/70 backdrop-blur-md border-purple-200 hover:border-pink-300 transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                      <Car className="w-16 h-16 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{car.make} {car.model}</h3>
                    <p className="text-purple-600 mb-2">Year: {car.year}</p>
                    <p className="text-gray-600 mb-2">Engine: {car.displacement}L {car.cylinders}-cyl</p>
                    <p className="text-gray-600 mb-2">Fuel: {car.fuel_type}</p>
                    <p className="text-gray-600 mb-2">Drive: {car.drive}</p>
                    <div className="mt-auto">
                      <Link to={`/car/${index}`}>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 shadow-md">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" onClick={handleNext} disabled={featuredCars.length < 4}>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Recommended Models Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recommended for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked selections based on performance, innovation, and customer satisfaction.
            </p>
          </div>
          <div className={`grid ${getGridCols(recommendedCars.length)} gap-6 justify-center`}>
            {recommendedCars.length > 0 ? (
              recommendedCars.map((car, index) => (
                <Card key={index} className="flex flex-col bg-white/80 backdrop-blur-md border-purple-200 hover:border-pink-300 transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg hover:shadow-xl">
                  <CardContent className="p-4 flex flex-col flex-1">
                    <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-3 flex items-center justify-center">
                      <Car className="w-12 h-12 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{car.make} {car.model}</h3>
                    <p className="text-sm text-purple-600 mb-1">{car.class}</p>
                    <p className="text-gray-600 mb-1">Year: {car.year}</p>
                    <p className="text-gray-600 mb-1">Engine: {car.displacement}L {car.cylinders}-cyl</p>
                    <p className="text-gray-600 mb-1">Fuel: {car.fuel_type}</p>
                    <p className="text-gray-600 mb-1">Drive: {car.drive}</p>
                    <div className="mt-auto">
                      <Link to={`/car/${index}`}>
                        <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-8">
                No recommended cars available at this time.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to Charelle Auto. 
            Schedule your test drive today and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule-test-drive">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Test Drive
              </Button>
            </Link>
            <Link to="/models">
              <Button variant="outline" className="border-2 border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Browse All Models
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;