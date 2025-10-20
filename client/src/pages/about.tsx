import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { usePageTransition } from "@/hooks/use-page-transition";


const About = () => {
  const { isVisible } = usePageTransition();
  const heroAnimation = useScrollAnimation();
  const quoteAnimation = useScrollAnimation();
  const pillarsAnimation = useStaggeredAnimation(2, 300);

  return (
    <div className={`page-transition ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section ref={heroAnimation.ref} className="py-20 gradient-border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className={`text-3xl md:text-4xl font-display font-bold text-primary mb-6 text-sharp tracking-tight fade-in-up ${heroAnimation.isVisible ? 'animate' : ''}`}>What is Vidolo?</h1>
              <p className={`text-lg text-muted-foreground leading-relaxed text-sharp fade-in-up animate-delay-2 ${heroAnimation.isVisible ? 'animate' : ''}`}>
                Vidolo is a fusion of two Sanskrit words – "Vidya", meaning knowledge and learning, and "Bolo" meaning the ability to speak. And drawing parallels from the name, Vidolo champions the voiceless by empowerment through public speaking.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/images/about-vidolo.jpg" 
                  alt="Vidolo students and facilitators in educational workshop" 
                  className="rounded-xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Why Public Speaking?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In today's generation, public speaking is a transformative skill, a tool that, when honed, weaves opportunities, jobs, visibility and influence together. Yet, in many underprivileged schools around the world, this skill is often overlooked and barely taught.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vidolo is a collective of internationally educated students who were fortunate to learn public speaking and debating at an early age. These skills have helped us secure internships, university placements, and leadership roles. Now, we're paying it forward.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to empower students who have not had the same opportunities — by equipping them with the very skills that helped us succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section ref={quoteAnimation.ref} className="py-12 warm-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className={`text-2xl md:text-3xl font-bold text-primary italic leading-relaxed scale-in ${quoteAnimation.isVisible ? 'animate' : ''}`}>
              "To speak is to empower — and to empower is to change a life."
            </blockquote>
            <cite className={`text-lg text-warm-accent mt-4 block font-medium fade-in-up animate-delay-2 ${quoteAnimation.isVisible ? 'animate' : ''}`}>— Aadit Amit Sureka</cite>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Focus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All Vidolo initiatives stem from a single goal: empowerment. We achieve this through two core pillars.
            </p>
          </div>
          
          <div ref={pillarsAnimation.ref} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className={`p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer scale-in ${pillarsAnimation.visibleItems[0] ? 'animate' : ''}`}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mb-6 transition-colors hover:bg-warm-accent/20">
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">1. Empowerment through Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe education is the ultimate equalizer. That's why many of our programs focus on fundraising and providing financial aid to support the schooling of underprivileged students. By funding education, we provide the building blocks for students to gain knowledge, confidence, and long-term opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer scale-in animate-delay-2 ${pillarsAnimation.visibleItems[1] ? 'animate' : ''}`}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mb-6 transition-colors hover:shadow-lg">
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">2. Empowerment through Public Speaking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Education alone isn't enough. To truly thrive in the modern world, students need the ability to articulate ideas, negotiate, and present themselves confidently. That's why Vidolo offers a wide range of free public speaking workshops, specifically designed to turn complete beginners into capable speakers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
