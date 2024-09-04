import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Activity, AlertTriangle, BarChart, Send } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email and industry to your backend
    console.log('Submitted:', { email, industry });
    // Reset form fields
    setEmail('');
    setIndustry('');
    // You might want to show a success message to the user here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">AI-Powered Computer Vision for Manufacturing</h1>
          <p className="text-xl mb-8">Enhance quality control, monitor processes, and detect defects with cutting-edge AI solutions</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">Get Started</Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Eye className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                Ensure product excellence with AI-driven visual inspection
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Activity className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Process Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                Real-time insights into your manufacturing processes
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <AlertTriangle className="w-10 h-10 text-red-600 mb-2" />
                <CardTitle>Defect Detection</CardTitle>
              </CardHeader>
              <CardContent>
                Identify and classify defects with high accuracy
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                Gain actionable insights to optimize your operations
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Section: Free AI Diagnostics */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get Your Free AI Diagnostic Report</h2>
          <p className="text-xl text-center mb-12">Discover how AI can revolutionize your manufacturing process. Receive a customized analysis for your industry.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-4">
              <Select value={industry} onValueChange={setIndustry} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="aerospace">Aerospace</SelectItem>
                  <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                  <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              <Send className="w-4 h-4 mr-2" />
              Get Free Report
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Manufacturing Process?</h2>
          <p className="text-xl mb-8">Join the AI revolution and stay ahead of the competition</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">Request a Demo</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your AI SaaS Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
