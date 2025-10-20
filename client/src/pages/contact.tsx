import { Card, CardContent } from "@/components/ui/card";

import { usePageTransition } from "@/hooks/use-page-transition";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { isVisible } = usePageTransition();
  const heroAnimation = useScrollAnimation();

  return (
    <div className={`page-transition ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section ref={heroAnimation.ref} className="py-20 gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className={`text-3xl md:text-4xl font-bold text-primary mb-6 fade-in-up ${heroAnimation.isVisible ? 'animate' : ''}`}>Contact Us</h1>
              <p className={`text-lg text-muted-foreground fade-in-up animate-delay-2 ${heroAnimation.isVisible ? 'animate' : ''}`}>
                Have questions or want to learn more about our work? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className={`space-y-8 fade-in-left animate-delay-3 ${heroAnimation.isVisible ? 'animate' : ''}`}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-warm-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">vidologlobal@gmail.com</p>
                  </div>
                </div>
                

              </div>
              
              <Card className={`p-8 fade-in-right animate-delay-4 ${heroAnimation.isVisible ? 'animate' : ''}`}>
                <CardContent className="pt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Vidolo team meeting" 
                    className="rounded-lg w-full h-auto mb-6 hover:scale-105 transition-transform duration-300" 
                  />
                  <h3 className="text-xl font-semibold text-primary mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're interested in volunteering, partnerships, or learning more about our programs, we're here to help and answer any questions you may have.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
