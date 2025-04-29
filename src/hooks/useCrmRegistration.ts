
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";

export const useCrmRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  
  const submitToCrm = async (formData: any) => {
    setIsSubmitting(true);
    setUserEmail(formData.email || "");
    
    try {
      // Simulate API call to register user in CRM
      // In a real implementation, you would make an API call to your CRM system
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "CRM Registration Successful!",
        description: "Your profile has been added to our broker CRM system. An investment specialist will contact you shortly.",
      });

      // Show a more visible toast with next steps
      sonnerToast.success(
        "Registration Complete!", 
        {
          description: "Visit cex.platform.eu to activate your account using the email we just sent you.",
          duration: 8000,
          action: {
            label: "Open platform",
            onClick: () => window.open("https://cex.platform.eu", "_blank"),
          },
        }
      );
      
      setRegistrationComplete(true);
      return true;
    } catch (error) {
      console.error("CRM registration error:", error);
      toast({
        title: "CRM Registration Failed",
        description: "There was an issue adding your profile to our system. Please try again.",
        variant: "destructive",
      });
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    submitToCrm,
    isSubmitting,
    registrationComplete,
    userEmail
  };
};
