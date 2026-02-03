import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Sparkles, 
  MapPin, 
  Users, 
  Compass, 
  Star, 
  Download,
  ChevronDown,
  Play,
  ArrowRight,
  Globe,
  Calendar,
  Heart,
  Zap
} from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";

import heroBeach from "@/assets/images/hero-beach.png";
import appMockup from "@/assets/images/app-mockup.png";
import influencer1 from "@/assets/images/influencer-1.png";
import influencer2 from "@/assets/images/influencer-2.png";
import influencer3 from "@/assets/images/influencer-3.png";
import destinationSantorini from "@/assets/images/destination-santorini.png";
import destinationMachuPicchu from "@/assets/images/destination-machu-picchu.png";
import destinationKyoto from "@/assets/images/destination-kyoto.png";
import destinationMorocco from "@/assets/images/destination-morocco.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Itineraries",
    description: "Get personalized travel plans crafted by AI that understands your preferences, budget, and travel style.",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Connect with Influencers",
    description: "Follow travel creators, get inspired by their journeys, and discover hidden gems they recommend.",
    color: "bg-secondary"
  },
  {
    icon: Compass,
    title: "Explore Destinations",
    description: "Browse stunning destinations worldwide with detailed guides, tips, and local insights.",
    color: "bg-accent"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Optimize your travel time with intelligent scheduling that accounts for distances and opening hours.",
    color: "bg-primary"
  }
];

const destinations = [
  { name: "Santorini", country: "Greece", image: destinationSantorini, rating: 4.9 },
  { name: "Machu Picchu", country: "Peru", image: destinationMachuPicchu, rating: 4.8 },
  { name: "Kyoto", country: "Japan", image: destinationKyoto, rating: 4.9 },
  { name: "Marrakech", country: "Morocco", image: destinationMorocco, rating: 4.7 }
];

const influencers = [
  { name: "Sarah Adventures", followers: "2.1M", image: influencer1, specialty: "Beach & Islands" },
  { name: "Marco Explorer", followers: "1.8M", image: influencer2, specialty: "Ancient Temples" },
  { name: "Emma Travels", followers: "890K", image: influencer3, specialty: "European Cities" }
];

const stats = [
  { value: "10M+", label: "Downloads" },
  { value: "150+", label: "Countries" },
  { value: "50K+", label: "Itineraries Created" },
  { value: "4.9", label: "App Store Rating" }
];

export default function Home() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-full px-6 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white" data-testid="text-logo">Ghumo</span>
            </div>
            <ul className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              <li><a href="#features" className="text-white/90 font-medium opacity-90 hover:opacity-100 transition-opacity" data-testid="link-features">Features</a></li>
              <li><a href="#destinations" className="text-white/90 font-medium opacity-90 hover:opacity-100 transition-opacity" data-testid="link-destinations">Destinations</a></li>
              <li><a href="#influencers" className="text-white/90 font-medium opacity-90 hover:opacity-100 transition-opacity" data-testid="link-influencers">Influencers</a></li>
              <li><a href="#download" className="text-white/90 font-medium opacity-90 hover:opacity-100 transition-opacity" data-testid="link-download">Download</a></li>
            </ul>
            <Button 
              className="bg-white text-primary font-semibold rounded-full px-6"
              data-testid="button-get-app-nav"
            >
              Get the App
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBeach})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium backdrop-blur-sm" data-testid="badge-hero">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Travel Planning
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Explore the World
            <br />
            <span className="text-accent">Your Way</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-description"
          >
            Discover destinations, connect with travel influencers, and get 
            personalized AI itineraries tailored just for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-white text-primary font-semibold rounded-full px-8 py-6 text-lg gap-3 shadow-2xl"
              data-testid="button-download-ios"
            >
              <SiApple className="w-6 h-6" />
              Download for iOS
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white font-semibold rounded-full px-8 py-6 text-lg gap-3 bg-white/10 backdrop-blur-sm"
              data-testid="button-download-android"
            >
              <SiGoogleplay className="w-5 h-5" />
              Get on Android
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center gap-12 flex-wrap"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
          data-testid="button-scroll-down"
          aria-label="Scroll to features section"
        >
          <ChevronDown className="w-10 h-10" aria-hidden="true" />
        </motion.button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-features">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-features-title">
              Everything You Need to
              <span className="gradient-text"> Travel Smarter</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-features-description">
              Powerful features designed to make your travel planning effortless and exciting
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-testid={`card-feature-${index}`}>
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20" data-testid="badge-app-showcase">
                App Preview
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-app-showcase-title">
                Plan Your Perfect Trip in
                <span className="gradient-text"> Minutes</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed" data-testid="text-app-showcase-description">
                Our intuitive interface makes trip planning a breeze. Simply tell us your preferences, 
                and watch as our AI creates a personalized itinerary complete with recommendations, 
                bookings, and local tips.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Smart destination suggestions based on your interests",
                  "Real-time collaboration with travel companions",
                  "Offline access to your itineraries anywhere",
                  "Budget tracking and expense splitting"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3" data-testid={`feature-item-${index}`}>
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="gradient-hero text-white font-semibold rounded-full px-8 py-6 text-lg gap-2"
                data-testid="button-learn-more"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl rounded-full" />
              <img 
                src={appMockup} 
                alt="Ghumo App Interface" 
                className="relative z-10 w-full max-w-lg mx-auto float-animation drop-shadow-2xl"
                data-testid="img-app-mockup"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-accent/20 text-[#2C3E50] border-accent/30" data-testid="badge-destinations">
              <MapPin className="w-3 h-3 mr-1" />
              Destinations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-destinations-title">
              Trending
              <span className="gradient-text"> Destinations</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-destinations-description">
              Discover the world's most breathtaking places curated by our community
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" data-testid={`card-destination-${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="glass px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-white text-sm font-medium">{destination.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                      <p className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {destination.country}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg font-semibold border-2 gap-2"
              data-testid="button-explore-destinations"
            >
              Explore All Destinations
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Influencers Section */}
      <section id="influencers" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-influencers">
              <Users className="w-3 h-3 mr-1" />
              Community
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-influencers-title">
              Follow Top
              <span className="gradient-text"> Travel Influencers</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-influencers-description">
              Get inspired by creators who share their authentic travel experiences and hidden gems
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {influencers.map((influencer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-testid={`card-influencer-${index}`}>
                  <div className="relative mb-4 inline-block">
                    <Avatar className="w-24 h-24 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <AvatarImage src={influencer.image} alt={influencer.name} />
                      <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-2 border-white">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{influencer.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{influencer.specialty}</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{influencer.followers}</span>
                    <span className="text-muted-foreground text-sm">followers</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="rounded-full w-full font-medium"
                    data-testid={`button-follow-${index}`}
                  >
                    Follow
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm mb-8">
              <Download className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-download-title">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto" data-testid="text-download-description">
              Join millions of travelers who have transformed their adventures with Ghumo. 
              Download now and unlock a world of possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary font-semibold rounded-full px-10 py-7 text-lg gap-3 shadow-2xl pulse-glow"
                data-testid="button-download-ios-cta"
              >
                <SiApple className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-secondary font-semibold rounded-full px-10 py-7 text-lg gap-3 shadow-2xl"
                data-testid="button-download-android-cta"
              >
                <SiGoogleplay className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80">
              <div className="flex -space-x-3">
                <Avatar className="w-10 h-10 border-2 border-white">
                  <AvatarImage src={influencer1} />
                </Avatar>
                <Avatar className="w-10 h-10 border-2 border-white">
                  <AvatarImage src={influencer2} />
                </Avatar>
                <Avatar className="w-10 h-10 border-2 border-white">
                  <AvatarImage src={influencer3} />
                </Avatar>
              </div>
              <span className="ml-2">Join <strong className="text-white">10M+ travelers</strong> worldwide</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-foreground text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Ghumo</span>
              </div>
              <p className="text-white/60 leading-relaxed" data-testid="text-footer-description">
                Making travel planning simple, personalized, and inspiring for everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#features" className="hover:text-white transition-colors" data-testid="link-footer-features">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-pricing">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-download">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-about">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-careers">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-press">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm" data-testid="text-copyright">
              2024 Ghumo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="link-social-twitter">Twitter</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="link-social-instagram">Instagram</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="link-social-facebook">Facebook</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="link-social-youtube">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
