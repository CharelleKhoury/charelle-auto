// Interface matching the API Ninja Cars API response
export interface ApiCar {
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


export const carCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'electric', label: 'Electric' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'sports', label: 'Sports' }
];

export const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'year', label: 'Year' },
  { value: 'horsepower', label: 'Horsepower' },
  { value: 'speed', label: 'Top Speed' }
];
