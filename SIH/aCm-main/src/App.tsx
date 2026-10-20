import { useState } from 'react';
import { Menu, X, Users, CheckSquare, BarChart3, Code, Lightbulb, Trophy, Eye, EyeOff } from 'lucide-react';
import Dashboard from './components/Dashboard';
import WelcomeAnimation from './components/WelcomeAnimation';
const acmLogo = "https://bvcoe.acm.org/static/media/ACM-BVP-logo.6425d80f.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'signup' | 'dashboard' | 'welcome'>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'member' | 'core-member' | 'head-of-dept'>('member');
  const [userEmail, setUserEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('home');
    setUserRole('member');
    setUserEmail('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLSelectElement).value as 'member' | 'core-member' | 'head-of-dept';

    if (!emailInput) {
      alert('Please enter your email address');
      return;
    }

    setUserEmail(emailInput);
    setUserRole(role);
    setIsAuthenticated(true);
    setCurrentView('welcome');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (document.getElementById('signup-email') as HTMLInputElement).value;
    const firstName = (document.getElementById('first-name') as HTMLInputElement).value;
    const lastName = (document.getElementById('last-name') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLSelectElement).value as 'member' | 'core-member' | 'head-of-dept';

    if (!emailInput || !firstName || !lastName || !phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }

    setUserEmail(emailInput);
    setUserRole(position);
    setIsAuthenticated(true);
    setCurrentView('welcome');
  };

  const handleWelcomeComplete = () => {
    setCurrentView('dashboard');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (currentView === 'welcome') {
    return <WelcomeAnimation onComplete={handleWelcomeComplete} />;
  }

  if (isAuthenticated && currentView === 'dashboard') {
    return <Dashboard onLogout={handleLogout} userRole={userRole} userEmail={userEmail} />;
  }

  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-[hsl(var(--navy-deepest))]">
        <nav className="bg-[hsl(var(--navy-deep))]/95 backdrop-blur-md border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => setCurrentView('home')}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <img src={acmLogo} alt="ACM BVCOE Logo" className="h-10 w-auto -mr-1" />
                <span className="text-3xl font-bold text-white">ACM</span>
              </button>
            </div>
          </div>
        </nav>

        <div className="flex items-center justify-center px-4 py-16 animate-fade-in">
          <div className="bg-[hsl(var(--navy-deep))] border border-[hsl(var(--border))] rounded-2xl p-9 w-full max-w-xl shadow-2xl hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300">
            <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-white mb-8 text-base">Sign in to your ACM BVCOE account</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-medium text-white mb-2 hover:border-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    className="w-full px-4 py-3 pr-12 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-lg font-medium text-white mb-2">
                  Role
                </label>
                <select
                  id="role"
                  className="w-full px-4 py-3 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/10"
                >
                  <option value="member">Member</option>
                  <option value="core-member">Core Member</option>
                  <option value="head-of-dept">Head of Department</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg bg-purple hover:shadow-primary/50 text-xl"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white text-lg">
                Don't have an account?{' '}
                <button
                  onClick={() => setCurrentView('signup')}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'signup') {
    return (
      <div className="min-h-screen bg-[hsl(var(--navy-deepest))]">
        <nav className="bg-[hsl(var(--navy-deep))]/95 backdrop-blur-md border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => setCurrentView('home')}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <img src={acmLogo} alt="ACM BVCOE Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-white">ACM</span>
              </button>
            </div>
          </div>
        </nav>

        <div className="flex items-center justify-center px-4 py-16 animate-fade-in">
          <div className="bg-[hsl(var(--navy-deep))] border border-[hsl(var(--border))] rounded-2xl p-9 w-full max-w-xl shadow-2xl hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-2">Join ACM BVCOE</h2>
            <p className="text-white mb-8">Create your account to get started</p>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-lg font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    required
                    className="w-full px-4 py-3 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-lg  font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    required
                    className="w-full px-4 py-3 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone-number" className="block text-lg font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  required
                  className="w-full px-4 py-3 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-lg  font-medium text-white mb-2">
                  Position
                </label>
                <select
                  id="position"
                  className="w-full px-4 py-3 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                >
                  <option value="member">Member</option>
                  <option value="core-member">Core Member</option>
                  <option value="head-of-dept">Head of Department</option>
                </select>
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-lg font-medium text-white mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  id="signup-email"
                  required
                  className="w-full px-4 py-3 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="signup-password" className="block text-lg  font-medium text-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    id="signup-password"
                    required
                    className="w-full px-4 py-3 pr-12 bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-white transition-all hover:border-primary/30"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors"
                  >
                    {showSignupPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 bg-purple text-xl text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-primary/50"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white text-lg hover:scale-[1] active:scale=[.98]">
                Already have an account?{' '}
                <button
                  onClick={() => setCurrentView('login')}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--navy-deepest))]">
      <nav className="bg-[hsl(var(--navy-deep))]/95 backdrop-blur-md border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-lg animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={acmLogo} alt="ACM BVCOE Logo" className="h-10 w-auto" />
              <div className="text-2xl font-bold text-white">ACM</div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-primary transition-colors font-medium">About</a>
              <a href="#features" className="text-white hover:text-primary transition-colors font-medium">Features</a>
              <a href="#team" className="text-white hover:text-primary transition-colors font-medium">Team</a>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentView('login')}
                  className="text-white hover:text-primary transition-colors font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => setCurrentView('signup')}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 glow-blue"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-[hsl(var(--navy-medium))] rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-[hsl(var(--border))] animate-fade-in">
              <a href="#about" className="block text-white hover:text-primary transition-colors">About</a>
              <a href="#features" className="block text-white hover:text-primary transition-colors">Features</a>
              <a href="#team" className="block text-white hover:text-primary transition-colors">Team</a>
              <div className="pt-4 space-y-3 border-t border-[hsl(var(--border))]">
                <button
                  onClick={() => setCurrentView('login')}
                  className="block w-full text-left text-white hover:text-primary transition-colors font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => setCurrentView('signup')}
                  className="block w-full bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative px-4 py-20 sm:py-32 bg-gradient-to-b from-[hsl(var(--navy-deep))] to-[hsl(var(--navy-deep))]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Association for Computing
            <span className="block gradient-text mt-2">
              and Machinery
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-white mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empowering the next generation of tech innovators at BVCOE through collaboration, innovation, and technical excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setCurrentView('login')}
              className="bg-purple hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg glow-blue flex items-center justify-center btn-lift"
            >
              Access Dashboard
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={scrollToAbout}
              className="bg-purple text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg glow-purple btn-lift"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 bg-[hsl(var(--navy-deep))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">About ACM BVCOE</h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed animate-fade-in mb-12" style={{ animationDelay: '0.2s' }}>
              We are a vibrant community of computing enthusiasts at Bharati Vidyapeeth's College of Engineering,
              dedicated to advancing knowledge in computing, fostering innovation, and building technical excellence
              through collaborative learning and hands-on projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-xl p-8 hover:border-primary/50 transition-all card-hover animate-scale-in">
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 glow-blue">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Workshops</h3>
              <p className="text-white leading-relaxed">
                Regular hands-on workshops covering cutting-edge technologies, programming languages, and industry best practices to enhance your technical skills.
              </p>
            </div>

            <div className="bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-xl p-8 hover:border-primary/50 transition-all card-hover animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 glow-blue">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Projects</h3>
              <p className="text-white leading-relaxed">
                Collaborate on real-world projects, hackathons, and competitions that challenge your creativity and problem-solving abilities.
              </p>
            </div>

            <div className="bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-xl p-8 hover:border-primary/50 transition-all card-hover animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 glow-blue">
                <Trophy className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Programming</h3>
              <p className="text-white leading-relaxed">
                Join our competitive programming sessions, participate in coding contests, and sharpen your algorithmic thinking with fellow enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 py-20 bg-[hsl(var(--navy-deepest))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">Platform Features</h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our task management system streamlines collaboration and ensures efficient workflow across all ACM BVCOE initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[hsl(var(--navy-deep))] border border-[hsl(var(--border))] rounded-xl p-8 hover:border-primary/50 transition-all card-hover animate-scale-in">
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 glow-blue">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hierarchical Management</h3>
              <p className="text-white leading-relaxed">
                Core members assign to department heads, with built-in oversight and workflow control.
              </p>
            </div>

            <div className="bg-[hsl(var(--navy-deep))] border border-[hsl(var(--border))] rounded-xl p-8 hover:border-primary/50 transition-all card-hover animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 glow-blue">
                <CheckSquare className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Task Tracking</h3>
              <p className="text-white leading-relaxed">
                Accept, reject, or complete tasks with built-in deadline monitoring and status updates.
              </p>
            </div>

            <div className="bg-[hsl(var(--navy-deep))] border border-[hsl(var(--border))] rounded-xl p-8 hover:border-primary/50 transition-all card-hover animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 glow-blue">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Insights</h3>
              <p className="text-white leading-relaxed">
                Real-time analytics and progress tracking for better team performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="px-4 py-20 bg-[hsl(var(--navy-deep))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">Our Core Team</h2>
            <p className="text-xl text-white max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Meet the dedicated leaders driving our community forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Satvik Phour",
                role: "Chairperson ACM",
                img: "https://bvcoe.acm.org/static/media/Satvik.e30a3550.jpg",
                description: "Steering ACM BVCOE's strategic vision and fostering a culture of technical excellence and innovation"
              },
              {
                name: "Harsh Raj",
                role: "Vice Chairperson ACM",
                img: "https://bvcoe.acm.org/static/media/HarshRaj.f239c0ac.JPG",
                description: "Supporting leadership initiatives and coordinating cross-functional teams to drive organizational success"
              },
              {
                name: "Sanskar Kannaujia",
                role: "General Secretary",
                img: "https://bvcoe.acm.org/static/media/Sanskar.eeeeb9bf.webp",
                description: "Managing day-to-day operations and ensuring seamless communication across all ACM chapters and events"
              },
              {
                name: "Harshit Bareja",
                role: "Vice Chair ACM-W",
                img: "https://bvcoe.acm.org/static/media/Harshit.8e48aef6.JPG",
                description: "Championing diversity in computing and leading initiatives to empower women in technology"
              },
              {
                name: "Teena Kaintura",
                role: "WebMaster ACM",
                img: "https://bvcoe.acm.org/static/media/Teena.a1f2bb7a.jpg",
                description: "Maintaining digital infrastructure and creating innovative web solutions for the ACM community"
              },
              {
                name: "Manya Sharma",
                role: "General Secretary ACM",
                img: "https://bvcoe.acm.org/static/media/Manya.afac2d5c.png",
                description: "Coordinating member activities and organizing technical workshops to enhance skill development"
              },
              {
                name: "Hitesh",
                role: "Treasurer ACM",
                img: "https://bvcoe.acm.org/static/media/hitesh.6a82ccbf.jpg",
                description: "Managing financial resources and ensuring transparent budget allocation for all ACM initiatives"
              },
              {
                name: "Riya Raj",
                role: "Membership Chair ACM",
                img: "https://bvcoe.acm.org/static/media/Riya.2f2238f9.jpg",
                description: "Building community engagement and onboarding new members into the ACM BVCOE family"
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-[hsl(var(--navy-deepest))] border border-[hsl(var(--border))] rounded-xl p-8 text-center hover:border-primary/50 transition-all card-hover animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-primary/20">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-white font-semibold mb-4">{member.role}</p>
                <p className="text-white leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-gradient-to-br from-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">Ready to Begin?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join ACM BVCOE today and become part of our vibrant community advancing computing education and innovation
          </p>
          <button
            onClick={() => setCurrentView('signup')}
            className="bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg animate-scale-in-up" style={{ animationDelay: '0.4s' }}
          >
            Join Now
          </button>
        </div>
      </section>

      <footer className="bg-[hsl(var(--navy-deepest))] border-t border-[hsl(var(--border))] px-4 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={acmLogo} alt="ACM BVCOE Logo" className="h-8 w-auto" />
            <div className="text-2xl font-bold text-white">ACM BVCOE</div>
          </div>
          <p className="text-white">© 2025 ACM Society of BVCOE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
