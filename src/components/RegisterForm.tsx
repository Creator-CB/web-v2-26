
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bot, Check, ChevronRight, Shield, ExternalLink } from "lucide-react";
import { useCrmRegistration } from "@/hooks/useCrmRegistration";

const RegisterForm = () => {
  const { toast } = useToast();
  const { submitToCrm, isSubmitting: isCrmSubmitting } = useCrmRegistration();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [formComplete, setFormComplete] = useState(false);
  const [platformUrl, setPlatformUrl] = useState("https://trading-platform.investai.eu");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (formData.firstName && formData.lastName) {
        setStep(2);
      } else {
        validate();
      }
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Register user in CRM
      const crmSuccess = await submitToCrm(formData);
      
      if (crmSuccess) {
        setFormComplete(true);
        toast({
          title: "Registration Complete!",
          description: "Your profile has been created and added to our investment broker CRM. Our specialist will contact you within 24 hours.",
        });
      }
      
      setIsSubmitting(false);
    }
  };

  const renderFormStep = () => {
    if (formComplete) {
      return (
        <div className="text-center py-10">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Registration Complete!</h3>
          <p className="text-gray-200 mb-8">
            Thank you for registering. Our AI is already analyzing your profile and our investment specialist will contact you within 24 hours.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <h4 className="text-lg font-semibold mb-3 text-white">Access Our Trading Platform</h4>
            <p className="text-gray-300 mb-4">Start exploring our advanced European trading platform while waiting for your personalized investment strategy.</p>
            <a 
              href={platformUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 button-gradient rounded-full py-3 px-6 text-white hover:opacity-90 transition-all group"
            >
              <span>Enter Trading Platform</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            
            <div className="mt-4 text-sm text-gray-300">
              <p>Our trading platform offers:</p>
              <ul className="list-disc list-inside mt-2 text-left">
                <li>Real-time European market data</li>
                <li>AI-powered trading suggestions</li>
                <li>Advanced portfolio analytics</li>
                <li>Commission-free trading on selected assets</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2"></div>
              <span className="text-gray-200">Profile Created</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mr-2"></div>
              <span className="text-gray-200">AI Analysis In Progress</span>
            </div>
          </div>
        </div>
      );
    }
    
    if (step === 1) {
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`bg-white/80 backdrop-blur-sm focus-visible:ring-pink-500 ${errors.firstName ? 'border-red-500' : ''}`}
              />
              {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`bg-white/80 backdrop-blur-sm focus-visible:ring-pink-500 ${errors.lastName ? 'border-red-500' : ''}`}
              />
              {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
            </div>
          </div>
          
          <Button
            onClick={handleNextStep}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full h-12 text-lg font-medium mt-4 group hover:shadow-lg transition-all duration-300"
          >
            <span>Continue</span>
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </>
      );
    }
    
    return (
      <>
        <div className="space-y-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`bg-white/80 backdrop-blur-sm focus-visible:ring-pink-500 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`bg-white/80 backdrop-blur-sm focus-visible:ring-pink-500 ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>
        
        <div className="flex gap-4 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep(1)}
            className="flex-1 border-pink-500 text-pink-500 hover:bg-pink-500/5"
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || isCrmSubmitting}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full h-12 text-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            {(isSubmitting || isCrmSubmitting) ? (
              <div className="flex items-center">
                <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Processing...</span>
              </div>
            ) : "Complete Profile"}
          </Button>
        </div>
      </>
    );
  };
  
  return (
    <section id="register" className="section-padding bg-gradient-to-br from-[#1A1F2C] to-[#453C63] relative overflow-hidden">
      {/* Abstract tech patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-pink-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse-slow animation-delay-1000"></div>
    
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-3 py-1 mb-6">
              <span className="text-sm font-medium uppercase tracking-wider text-white">Join Us</span>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Begin Your AI-Powered Investment Journey</h2>
            <p className="text-lg text-gray-200 mb-8">
              Create your investment profile and unlock the full power of our quantum AI and expert advisory team.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI-Generated Strategy</h3>
                  <p className="text-gray-300 text-sm">Our quantum AI will analyze thousands of market variables to create your personalized investment blueprint.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Expert Human Guidance</h3>
                  <p className="text-gray-300 text-sm">Our senior investment specialists will refine your AI strategy and provide personalized guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center mt-1">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-pink-500 font-bold text-xs">1</div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-pink-500/50 to-purple-500/50"></div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-pink-500 font-bold text-xs">2</div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500/50 to-blue-400/50"></div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-pink-500 font-bold text-xs">3</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 bg-white/10 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Create Your AI Profile</h3>
            
            <div className="mb-6 flex">
              <div className="relative flex items-center justify-center w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-white/20'} text-white font-medium`}>1</div>
                <div className={`h-1 flex-1 ${step >= 2 ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-white/20'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-white/20'} text-white font-medium`}>2</div>
                <div className={`h-1 flex-1 ${formComplete ? 'bg-gradient-to-r from-purple-500 to-blue-400' : 'bg-white/20'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formComplete ? 'bg-gradient-to-r from-blue-400 to-cyan-300' : 'bg-white/20'} text-white font-medium`}>3</div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              {renderFormStep()}
            </form>
            
            <p className="text-xs text-gray-300 mt-6 text-center">
              Your information is secured with military-grade encryption and will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
