import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useChapterTransition } from "@/hooks/use-chapter-transition";
import { useState } from "react";

const Team = () => {
  const { displayContent, startTransition } = useChapterTransition();
  const [selectedChapter, setSelectedChapter] = useState("All Chapters");

  const handleChapterChange = (chapter: string) => {
    if (chapter !== selectedChapter) {
      startTransition(() => {
        setSelectedChapter(chapter);
      });
    }
  };
  
  const chapters = ["All Chapters", "US Chapter", "Thailand Chapter", "Hong Kong Chapter", "Global Chapter"];
  
  const teamData = {
    "Global Chapter": [
      {
        name: "Aadit Amit Sureka",
        role: "Founder & Director",
        description: "TEDx speaker, Model UN champion, and national team member. Passionate about empowering underprivileged students through public speaking and education.",
        image: "/images/founder.png"
      },
      {
        name: "Ahaan Chowdhury",
        role: "Global Chief of Operations",
        description: "Overseeing global operations and strategic coordination across all Vidolo chapters to ensure seamless delivery of programs worldwide.",
        image: "/images/ahaan.png"
      },
      {
        name: "Mostafa Ramadan",
        role: "Global Chief Financial Officer",
        description: "Managing global financial operations and ensuring sustainable funding for Vidolo's educational programs worldwide.",
        image: "/images/mostafa.png"
      },
      {
        name: "Manaal Khan",
        role: "Global Chief Marketing Officer",
        description: "Leading global marketing strategies and brand communications to expand Vidolo's reach and impact worldwide.",
        image: "/images/manaal.png"
      },
      {
        name: "Samara Deshnoor",
        role: "Global Chief Communications Officer",
        description: "Overseeing internal and external communications to amplify Vidolo's mission and engage stakeholders worldwide.",
        image: "/images/samara.png"
      },
      {
        name: "Adithyanarayan Rajesh",
        role: "Chief Technical Officer",
        description: "Leading technology innovation and digital infrastructure to enhance Vidolo's educational programs and global reach.",
        image: "/images/adithyanarayan.png"
      }
    ],
    "US Chapter": [
      {
        name: "Andy Stahlman",
        role: "US Chief Executive Officer",
        description: "Leading Vidolo's operations and growth throughout the United States, expanding access to public speaking education.",
        image: "/images/andy.png"
      },
      {
        name: "Jack McGuane",
        role: "US Chief Communications Officer",
        description: "Managing communications strategy and public relations for Vidolo's US operations and community outreach.",
        image: "/images/jack.png"
      },
      {
        name: "Zaki Shamsi",
        role: "US Chief of Operations",
        description: "Overseeing day-to-day operations and strategic implementation of Vidolo's programs across the United States.",
        image: "/images/zaki.png"
      }
    ],
    "Thailand Chapter": [
      {
        name: "Laura",
        role: "Thailand Chief Executive Officer",
        description: "Leading Vidolo's operations and strategic vision across Thailand, expanding access to public speaking education.",
        image: "/images/laura.png"
      },
      {
        name: "Devyanshi",
        role: "Thailand Chief Marketing Officer",
        description: "Developing marketing strategies and brand awareness to expand Vidolo's reach across Thailand's educational communities.",
        image: "/images/devyanshi.png"
      },
      {
        name: "Tyne",
        role: "Thailand Chief Communications Officer",
        description: "Managing internal and external communications to amplify Vidolo's mission across Thailand's educational landscape.",
        image: "/images/tyne.png"
      },
      {
        name: "Rose",
        role: "Thailand Chief of Operations",
        description: "Overseeing operational excellence and strategic implementation of Vidolo's programs across Thailand.",
        image: "/images/rose-thailand.png"
      },
      {
        name: "PJ",
        role: "Thailand Director of Education",
        description: "Leading educational programs and public speaking initiatives for underprivileged students across Thailand.",
        image: "/images/pj.png"
      }
    ],
    "Hong Kong Chapter": [
      {
        name: "Jason Tang",
        role: "Hong Kong Chief Executive Officer",
        description: "Leading Vidolo's operations and strategic vision across Hong Kong, expanding access to public speaking education.",
        image: "/images/jason.png"
      },
      {
        name: "Cyann",
        role: "Hong Kong Chief Marketing Officer",
        description: "Developing marketing strategies and brand awareness to expand Vidolo's reach across Hong Kong's educational communities.",
        image: "/images/cyann.png"
      },
      {
        name: "Eugene",
        role: "Hong Kong Chief Financial Officer",
        description: "Managing financial operations and ensuring sustainable funding for Vidolo's public speaking programs across Hong Kong.",
        image: "/images/eugene.png"
      },
      {
        name: "Isaiah",
        role: "Hong Kong Chief Communications Officer",
        description: "Managing internal and external communications to amplify Vidolo's mission across Hong Kong's educational landscape.",
        image: "/images/isaiah.png"
      },
      {
        name: "Maximillien Sautede",
        role: "Hong Kong Chief of Operations",
        description: "Overseeing operational excellence and strategic implementation of Vidolo's programs across Hong Kong.",
        image: "/images/maximillien.png"
      }
    ]
  };
  
  const currentTeamMembers = selectedChapter === "All Chapters" 
    ? Object.values(teamData).flat()
    : teamData[selectedChapter as keyof typeof teamData] || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">Our Team</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Meet the dedicated individuals working to make a difference in communities worldwide.
            </p>
            
            {/* Chapter Selector */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 px-4">
              {chapters.map((chapter) => (
                <Button
                  key={chapter}
                  variant={selectedChapter === chapter ? "default" : "outline"}
                  onClick={() => handleChapterChange(chapter)}
                  className="px-3 py-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                >
                  {chapter}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
            {currentTeamMembers.map((member, index) => (
              <Card key={`${selectedChapter}-${index}`} className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="pt-4 sm:pt-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover hover:scale-110 transition-transform duration-300" 
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 leading-tight">{member.name}</h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 font-medium text-sm sm:text-base leading-tight">{member.role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
