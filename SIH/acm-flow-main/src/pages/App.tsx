import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, CheckSquare, BarChart3, ArrowRight, Zap } from "lucide-react";
import acmLogo from "@/assets/acm-bvp-logo.png";
import React from "react";
import ReactDOM from "react-dom";



const Index = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-blue-300">
        <div className="max-w-8xl font-bold mx-7 px-4 sm:px-5 lg:px-8 py-5">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center drop-shadow-[0_0_2px_black] bg-white animate-float">
                <img src={acmLogo} alt="ACM BVP Logo" className="w-14 h-16 object-contain drop-shadow-[0_0_2px_black]" />
              </div>
              <div>
                <h1 className="font-bold text-4xl drop-shadow-[0_0_4px_gray] animate-fade-in">ACM </h1>
                
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="accent" size="sm" className="text-xl border-spacing-1 drop-shadow-[0_0_4px_black] 
                hover:drop-shadow-[0_0_4px_white] transition-all duration-300 hover:scale-105">Sign In</Button>
              </Link>
              <Link to="/login">
                <Button variant="gradient" size="sm" className="text-xl drop-shadow-[0_0_4px_black] hover:drop-shadow-[0_0_4px_white] transition-all duration-300 hover:scale-105 animate-glow">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent leading-tight animate-slide-up">
              Association for Computing and Machinery 
              <br />
             
            </h1>
            <p className="text-2xl font-bold mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Manage your responsibilities, track progress, and collaborate with the team
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/login">
              <Button variant="accent" size="lg" className="w-full sm:w-auto text-xl font-semibold transition-all duration-300 hover:scale-105 animate-glow group">
                Jump to My Dashboard
                <ArrowRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/login">
            <Button variant="accent" size="lg" className="hover:drop-shadow-[0_0_2px_white] w-full sm:w-auto text-xl transition-all duration-300 hover:scale-105">
              View Team Updates
            </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="hover-lift glass-effect animate-slide-up transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Your Team Structure</CardTitle>
                <CardDescription>
                  View your department hierarchy and connect with core members across teams
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift glass-effect animate-slide-up transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <div className="gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "0.5s" }}>
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Your Active Tasks</CardTitle>
                <CardDescription>
                  Track assignments, accept new tasks, and submit your completed work
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift glass-effect animate-slide-up transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ animationDelay: "0.6s" }}>
              <CardHeader>
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "1s" }}>
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Your Performance</CardTitle>
                <CardDescription>
                  Monitor your contribution metrics and achievement progress in real-time
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">Everything You Need at Your Fingertips</h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Streamlined tools to excel in your ACM responsibilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4 animate-slide-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: "0.3s" }}>
                <div className="gradient-primary w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 animate-glow">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Stay in the Loop</h3>
                  <p className="text-muted-foreground">
                    Receive instant updates on your task status, team assignments, and important announcements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-slide-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: "0.4s" }}>
                <div className="gradient-accent w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 animate-glow" style={{ animationDelay: "0.5s" }}>
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Your Personalized Dashboard</h3>
                  <p className="text-muted-foreground">
                    Access features tailored to your role - whether you're a Core Member, Department Head, or Executive.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-slide-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: "0.5s" }}>
                <div className="gradient-primary w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 animate-glow" style={{ animationDelay: "1s" }}>
                  <CheckSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Seamless Submissions</h3>
                  <p className="text-muted-foreground">
                    Upload and submit your work effortlessly with our intuitive file management system.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8 hover-lift shadow-large animate-slide-up transition-all duration-500 hover:shadow-2xl hover:scale-105" style={{ animationDelay: "0.6s" }}>
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center animate-float">
                    <BarChart3 className="w-8 h-8 text-white animate-pulse-slow" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 animate-fade-in">Let's Get to Work!</h3>
                  <p className="text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                    Your team is counting on you. Check your pending tasks and continue making an impact.
                  </p>
                  <Link to="/login">
                    <Button variant="gradient" size="lg" className="w-full transition-all duration-300 hover:scale-105 animate-glow">
                      Open My Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue animate-float">
              <img src={acmLogo} alt="ACM BVP Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-bold text-xl">ACM </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 ACM Task Management System. 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
