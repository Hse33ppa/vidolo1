import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/animated-counter";
import { ArrowRight } from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/use-scroll-animation";
import { usePageTransition } from "@/hooks/use-page-transition";

const Home = () => {
  const { isVisible } = usePageTransition();
  const heroAnimation = useScrollAnimation();
  const impactAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimation();
  const statsStagger = useStaggeredAnimation(2, 200);

  return (
    <div className={`page-transition ${isVisible ? "visible" : ""}`}>
      {/* Hero Section */}
      <section ref={heroAnimation.ref} className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 text-sharp tracking-tight fade-in-left ${heroAnimation.isVisible ? "animate" : ""}`}
              >
                Empowering Voices Through Public Speaking
              </h1>
              <p
                className={`text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-sharp fade-in-left animate-delay-2 ${heroAnimation.isVisible ? "animate" : ""}`}
              >
                Vidolo champions the voiceless by empowerment through public
                speaking. We provide free workshops to underprivileged students,
                turning complete beginners into confident speakers who can
                change their lives.
              </p>
            </div>
            <div
              className={`relative fade-in-right animate-delay-3 ${heroAnimation.isVisible ? "animate" : ""}`}
            >
              <img
                src="/images/home-hero-v2.png"
                alt="Vidolo team members and students working together in educational workshop"
                className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section
        ref={impactAnimation.ref}
        className="py-16 warm-gradient-section"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-display font-bold text-primary mb-4 text-sharp tracking-tight fade-in-up ${impactAnimation.isVisible ? "animate" : ""}`}
            >
              Our Impact
            </h2>
            <p
              className={`text-lg text-muted-foreground text-sharp fade-in-up animate-delay-2 ${impactAnimation.isVisible ? "animate" : ""}`}
            >
              Making a difference in communities worldwide
            </p>
          </div>

          <div
            ref={statsStagger.ref}
            className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <Card
              className={`text-center p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 scale-in ${statsStagger.visibleItems[0] ? "animate" : ""}`}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 text-sharp">
                  <AnimatedCounter target={300} />
                </div>
                <p className="text-lg font-medium text-muted-foreground text-sharp">
                  Service Hours Volunteered
                </p>
              </CardContent>
            </Card>

            <Card
              className={`text-center p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 scale-in animate-delay-2 ${statsStagger.visibleItems[1] ? "animate" : ""}`}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 text-sharp">
                  <AnimatedCounter target={150} />
                </div>
                <p className="text-lg font-medium text-muted-foreground text-sharp">
                  Volunteers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section ref={missionAnimation.ref} className="py-20 gradient-border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`fade-in-left ${missionAnimation.isVisible ? "animate" : ""}`}
              >
                <img
                  src="/images/mission-workshop.png"
                  alt="Students participating in Vidolo educational workshop"
                  className="rounded-xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2
                    className={`text-3xl md:text-4xl font-display font-bold text-primary mb-6 text-sharp tracking-tight fade-in-right ${missionAnimation.isVisible ? "animate" : ""}`}
                  >
                    Our Mission
                  </h2>
                  <p
                    className={`text-muted-foreground leading-relaxed mb-6 text-sharp fade-in-right animate-delay-2 ${missionAnimation.isVisible ? "animate" : ""}`}
                  >
                    To empower communities through education, healthcare, and
                    sustainable development initiatives that create lasting
                    positive change and opportunity.
                  </p>
                </div>
                <div
                  className={`fade-in-right animate-delay-4 ${missionAnimation.isVisible ? "animate" : ""}`}
                >
                  <Button
                    asChild
                    className="hover:scale-105 transition-transform text-sharp font-medium accent-gradient hover:shadow-lg"
                  >
                    <Link href="/about">
                      Learn More About Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Letter Section */}
      <section className="py-20 warm-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 text-sharp tracking-tight">
                A Letter from Our Founder
              </h2>
              <p className="text-lg text-muted-foreground text-sharp">
                Personal reflections on our mission and vision
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 text-center">
                <img
                  src="/images/founder.png"
                  alt="Aadit Amit Sureka - Founder"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-display font-bold text-primary mb-2 text-sharp tracking-tight">
                  Aadit Amit Sureka
                </h3>
                <p className="text-muted-foreground text-sharp font-medium">
                  Founder & Director
                </p>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-warm-accent/10">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-sharp mb-6">
                      "Salutations, I'm Aadit Amit Sureka, the founder of Student Spark. Public speaking and debate have always been central to my life, with it being a journey of accomplishing milestone after milestone, including but not limited to achievements such as being one of the youngest people to deliver a TED Talk, winning and chairing over 15 MUN conferences, and being selected for the UAE National Debate and Public Speaking Team.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sharp mb-6">
                      Public speaking is more than a skill — it is a transformative tool that shapes changemakers, activists, and entrepreneurs. It's the tool that people use to present themselves, their opinions, and to fight for what they believe in. Public speaking — in its essence — is empowerment, empowerment that I was gifted to have thanks to my parents and teachers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sharp mb-6">
                      I founded Student Spark with the vision of empowering as many individuals as possible with this tool. To give someone the ability to speak up for themselves and act on what they believe is right is to change lives for the better. I'm thrilled to be part of a movement that strives to create tangible, lasting impact, filled with passionate individuals who are true to Vidolo's goal in a world of sideways applicant-based students."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
