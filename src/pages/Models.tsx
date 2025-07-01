import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Search, Filter, SortAsc } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { carCategories, sortOptions } from '@/data/mockCars';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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


// Add more filter options for transmission, drive, and fuel type
const transmissionOptions = [
  { value: 'all', label: 'All Transmissions' },
  { value: 'a', label: 'Automatic' },
  { value: 'm', label: 'Manual' }
];

const driveOptions = [
  { value: 'all', label: 'All Drives' },
  { value: 'fwd', label: 'Front-Wheel Drive' },
  { value: 'rwd', label: 'Rear-Wheel Drive' },
  { value: 'awd', label: 'All-Wheel Drive' },
  { value: '4wd', label: 'Four-Wheel Drive' }
];

const fuelOptions = [
  { value: 'all', label: 'All Fuels' },
  { value: 'gas', label: 'Gasoline' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'electricity', label: 'Electric' },
  { value: 'hybrid', label: 'Hybrid' }
];

const Models = () => {
  const [cars, setCars] = useState<ApiCar[]>([]);
  const [filteredCars, setFilteredCars] = useState<ApiCar[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [loading, setLoading] = useState(true);
  const [transmission, setTransmission] = useState('all');
  const [drive, setDrive] = useState('all');
  const [fuel, setFuel] = useState('all');

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
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
          const data = await response.json();
          if (Array.isArray(data)) allCars = allCars.concat(data);
        } catch (error) {
          // Ignore errors for individual makes
        }
      }
      setCars(allCars);
      setLoading(false);
    };
    fetchCars();
  }, []);

  useEffect(() => {
    const filtered = cars.filter(car => {
      const name = `${car.make} ${car.model}`;
      const matchesSearch =
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toString().includes(searchTerm) ||
        (car.class?.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'electric' && car.fuel_type?.toLowerCase() === 'electricity') ||
        (selectedCategory === 'hybrid' && car.class?.toLowerCase().includes('hybrid')) ||
        (selectedCategory === 'luxury' && car.class?.toLowerCase().includes('luxury')) ||
        (selectedCategory === 'sports' && car.class?.toLowerCase().includes('sports'));
      const matchesTransmission =
        transmission === 'all' || car.transmission?.toLowerCase() === transmission;
      const matchesDrive =
        drive === 'all' || car.drive?.toLowerCase() === drive;
      const matchesFuel =
        fuel === 'all' || car.fuel_type?.toLowerCase() === fuel;
      return matchesSearch && matchesCategory && matchesTransmission && matchesDrive && matchesFuel;
    });

    // Sort the filtered cars
    filtered.sort((a, b) => {
      const nameA = `${a.make} ${a.model}`;
      const nameB = `${b.make} ${b.model}`;
      switch (sortBy) {
        case 'name':
          return nameA.localeCompare(nameB);
        case 'year':
          return b.year - a.year;
        default:
          return 0;
      }
    });

   setFilteredCars(filtered);
  }, [cars, searchTerm, selectedCategory, sortBy, transmission, drive, fuel]);
    

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <Car className="w-16 h-16 text-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 text-xl">Loading Models...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <Navigation />
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Models
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Discover the future of automotive excellence with our complete range of innovative vehicles, 
              from electric powerhouses to luxury cruisers.
            </p>
          </div>
          
          {/* Filters and Search */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-lg border border-purple-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/80 border-purple-200 text-gray-700 placeholder-gray-500 rounded-full"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white/80 border-purple-200 rounded-full">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {carCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Transmission Filter */}
              <Select value={transmission} onValueChange={setTransmission}>
                <SelectTrigger className="bg-white/80 border-purple-200 rounded-full">
                  <SelectValue placeholder="Transmission" />
                </SelectTrigger>
                <SelectContent>
                  {transmissionOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Drive Filter */}
              <Select value={drive} onValueChange={setDrive}>
                <SelectTrigger className="bg-white/80 border-purple-200 rounded-full">
                  <SelectValue placeholder="Drive" />
                </SelectTrigger>
                <SelectContent>
                  {driveOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Fuel Filter */}
              <Select value={fuel} onValueChange={setFuel}>
                <SelectTrigger className="bg-white/80 border-purple-200 rounded-full">
                  <SelectValue placeholder="Fuel" />
                </SelectTrigger>
                <SelectContent>
                  {fuelOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/80 border-purple-200 rounded-full">
                  <SortAsc className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions
                    .filter(option => option.value === 'name' || option.value === 'year')
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Results Count */}
              <div className="flex items-center justify-center sm:justify-start">
                <span className="text-gray-600 font-medium text-sm sm:text-base">
                  {filteredCars.length} {filteredCars.length === 1 ? 'model' : 'models'} found
                </span>
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredCars.map((car, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-md border-purple-200 hover:border-pink-300 transition-all duration-300 transform hover:scale-105 animate-fade-in shadow-lg hover:shadow-xl" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-4 sm:p-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                    <Car className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {car.class || 'Standard'}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{car.make} {car.model}</h3>
                  <p className="text-purple-600 mb-1 text-xs sm:text-sm">Year: {car.year}</p>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">Engine: {car.displacement}L {car.cylinders}-cyl</p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                    {car.fuel_type ? `Fuel: ${car.fuel_type}` : ''}
                  </p>
                  <Link to={`/car/${index}`}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 shadow-md text-sm sm:text-base">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <Car className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg sm:text-xl mb-4">No models found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('name');
                }}
                variant="outline" 
                className="border-purple-400 text-purple-600 hover:bg-purple-50"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Models;