import { Metadata } from "next";
import Hero from "@/components/Hero";
import FramedImage from "@/components/Images";
import Stat from "@/components/Stats";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Btn from "@/components/Btn";
import { HiChevronRight, HiUsers, HiCode, HiBriefcase } from "react-icons/hi";
import data from "@/data.json";

export const metadata: Metadata = {
  description: "This is Home for Solid Pro",
};
const iconMapping = {
  'code': HiCode,
  'users': HiUsers,
  'briefcase': HiBriefcase
}

export default function Home() {
  return (
    <main>
      <Hero title="Empowering Yemen\'s Tech Innovation" description="We led Yemen's first major tech hackathon for economic recovery, bringing innovation and entrepreneurship to the forefront." />
      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <Stat
                key={index}
                number={stat.value}
                statement={stat.statement}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Building on our successful hackathon experience, we offer specialized solutions to empower Yemen's digital transformation."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <Card
                key={index}
                title={service.label}
                description={service.description}
                icon={iconMapping[service.icon]}
                link={`/services#${service.id}`}
                service
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-brand-orange font-medium">
                  FEATURED CASE STUDY
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {data.projects[0].title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {data.projects[0].description}
              </p>
              <ul className="space-y-3 mb-8">
                {data.projects[0].stats.map((stat, index) => (
                  <li className="flex items-start" key={index}>
                    <HiChevronRight className="h-5 w-5 text-brand-orange me-2 mt-0.5" />
                    <span>{`${stat.value} ${stat.statement}`}</span>
                  </li>
                ))}
              </ul>

                <Btn className="bg-brand-blue hover:bg-brand-blue-light btn-hover" text='Read Full Case Study' link={`events/${data.projects[0].id}`} />
                
            </div>
            <FramedImage
              src={`/images/about/${data.projects[0].image}`}
              alt={data.projects[0].title}
            />
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Innovate with Us?"
        description="Whether you're looking to host a hackathon, build tech capacity, or accelerate your startup, we're here to help you succeed."
        text="Get Started Today"
      />
    </main>
  );
}
