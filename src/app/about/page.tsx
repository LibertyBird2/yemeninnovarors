import { Metadata } from "next";
import Image from "next/image";
import FramedImage from "@/components/Images";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import Card from "@/components/Card";
import data from "@/data.json";

export const metadata: Metadata = {
  description: "This is Docs page for Solid Pro",
};

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About Us" subtitle="..." />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FramedImage
              src="/images/about/about-dark-01.png"
              alt="Our Mission"
            />
            <div>
              <SectionHeading title="Our Mission" />
              <p className="text-lg text-gray-600 mb-6">{data.mission.text}</p>
              <div className="grid grid-cols-2 gap-4">
                {data.mission.details.map((detail, index) => (
                  <div key={index}>
                    {Object.keys(detail).map((key, value) => (
                      <div className="flex items-start" key={key}>
                        <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center me-3 mt-1">
                          {/* <Rocket className="h-5 w-5 text-brand-blue" /> */}
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{key}</h3>
                          <p className="text-gray-600 text-sm">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Story" />

          {data.story.map((item, index) => (
            <div key={index} className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Dedicated Team"
            subtitle="Our diverse team comprises passionate Yemeni youth, along with local and international experts, consultants, and facilitators, all united by a shared vision for innovation and positive change."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.team.map((member, index) => (
              <Card
                key={index}
                title={member.name}
                position={member.position}
                image={`/images/team/${member.image}.jpeg`}
                description={member.bio}
                team
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Partners & Network"
            subtitle="We collaborate with organizations committed to Yemen's technological advancement and economic development."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {data.partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center hover-scale"
              >
                <Image
                  src={`/images/partners/${partner.logo}.svg`}
                  alt={partner.name}
                  className="max-h-16"
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Join Us in Shaping Yemen's Tech Future"
        description="Whether you're a potential client, partner, or team member, we'd love to connect and explore how we can work together."
        text="Get Started Today"
      />
    </>
  );
};

export default AboutUs;
