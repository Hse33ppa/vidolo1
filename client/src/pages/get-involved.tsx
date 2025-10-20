import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

import { usePageTransition } from "@/hooks/use-page-transition";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const GetInvolved = () => {
  const { isVisible } = usePageTransition();
  const heroAnimation = useScrollAnimation();
  const cardsAnimation = useStaggeredAnimation(3, 200);
  const secondRowAnimation = useStaggeredAnimation(2, 200);
  const handleVolunteerApplication = () => {
    // External form redirect - replace with actual URL when available
    window.open("https://forms.google.com/volunteer-application", "_blank");
  };

  const handleShareStory = () => {
    // Share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Vidolo - Empowering Communities Through Education',
        text: 'Join Vidolo in creating lasting change through education and healthcare initiatives.',
        url: window.location.origin
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className={`page-transition ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section ref={heroAnimation.ref} className="py-20 gradient-border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-3xl md:text-4xl font-bold text-primary mb-6 fade-in-up ${heroAnimation.isVisible ? 'animate' : ''}`}>Why Should You Volunteer?</h1>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up animate-delay-2 ${heroAnimation.isVisible ? 'animate' : ''}`}>
              At Vidolo, we believe that the best way to grow is to give. Volunteering with us isn't just about helping others, but about discovering your own potential, gaining real-world experience, and becoming part of a global movement to make education and communication accessible to all.
            </p>
          </div>
          
          <div ref={cardsAnimation.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className={`p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 scale-in ${cardsAnimation.visibleItems[0] ? 'animate' : ''}`}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transition-colors hover:bg-primary/20">
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">1. Make a Real Impact</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In many underprivileged communities, students never get the chance to learn public speaking — a skill that opens doors to jobs, confidence, and leadership. One voice can spark change. One volunteer can spark a future.
                </p>
                <Button onClick={handleVolunteerApplication} className="w-full hover:scale-105 transition-transform bg-primary text-white hover:bg-primary/90 hover:shadow-lg">
                  Apply to Volunteer
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 scale-in animate-delay-2 ${cardsAnimation.visibleItems[1] ? 'animate' : ''}`}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mb-6 transition-colors hover:bg-warm-accent/20">
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">2. Grow as a Leader</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Public speaking is a superpower — and teaching it helps you master it. As you guide others to find their voice, you'll sharpen your own. Volunteering at Vidolo gives you the chance to lead, present, mentor, and manage.
                </p>
                <Button onClick={handleVolunteerApplication} className="w-full hover:scale-105 transition-transform bg-primary text-white hover:bg-primary/90 hover:shadow-lg">
                  Join Our Team
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 scale-in animate-delay-4 ${cardsAnimation.visibleItems[2] ? 'animate' : ''}`}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mb-6 transition-colors hover:shadow-lg">
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">3. Join a Global Community</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Vidolo is powered by a diverse collective of international students who share a common mission: empowerment. When you join us, you become part of a community that uplifts each other.
                </p>
                <Button className="w-full hover:scale-105 transition-transform bg-primary text-white hover:bg-primary/90 hover:shadow-lg" onClick={handleShareStory}>
                  Share Our Story
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div ref={secondRowAnimation.ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            <Card className={`p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 scale-in ${secondRowAnimation.visibleItems[0] ? 'animate' : ''}`}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mb-6 transition-colors hover:bg-warm-accent/20">
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">4. Gain Real-World Experience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  You'll learn how to organize workshops, communicate with students, build curriculum, manage teams, and solve problems creatively — all in a supportive environment. This experience will help you stand out.
                </p>
                <Button className="w-full hover:scale-105 transition-transform bg-primary text-white hover:bg-primary/90 hover:shadow-lg" asChild>
                  <Link href="/contact">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 scale-in animate-delay-2 ${secondRowAnimation.visibleItems[1] ? 'animate' : ''}`}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mb-6 transition-colors hover:shadow-lg">
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">5. Give Back What You've Been Given</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you've had the chance to learn public speaking or receive a good education, you know how life-changing it can be. Volunteering with Vidolo is your opportunity to pass that gift on.
                </p>
                <Button className="w-full hover:scale-105 transition-transform bg-primary text-white hover:bg-primary/90 hover:shadow-lg" asChild>
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our global community of volunteers who are empowering underprivileged students through public speaking and education. Together, we can change lives one voice at a time.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <blockquote className="text-2xl md:text-3xl font-bold text-primary italic mb-6">
                "To speak is to empower — and to empower is to change a life."
              </blockquote>
              <cite className="text-lg text-muted-foreground">— Aadit Amit Sureka, Founder</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
