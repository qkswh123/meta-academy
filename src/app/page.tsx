import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SubjectSection from "@/components/SubjectSection";
import TeacherSection from "@/components/TeacherSection";
import NewsSection from "@/components/NewsSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SubjectSection />
      <TeacherSection />
      <NewsSection />
      <ContactCTA />
    </>
  );
}
