import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car, Home } from "lucide-react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-black">
      <Navigation />
      
      <div className="pt-24 flex items-center justify-center min-h-screen px-4">
        <div className="text-center animate-fade-in">
          {/* Animated 404 */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              404
            </div>
            <Car className="w-24 h-24 text-purple-400 mx-auto animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Looks like you've driven off the beaten path. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/models">
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Car className="w-5 h-5 mr-2" />
                View Models
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;