import SectionHeading from "@/components/SectionHeading";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Breadcrumb from "@/components/Breadcrumb";
import Stat from "@/components/Stats";
import data from "@/data.json";
import FramedImage from "@/components/Images";
import { TabItem, Tabs } from "flowbite-react";
import Card from "@/components/Card";
import { HiChevronRight, HiCode, HiUsers, HiBriefcase, HiCheckCircle } from "react-icons/hi";


const iconMapping = {
  'code': HiCode,
  'users': HiUsers,
  'briefcase': HiBriefcase
}

const CaseStudy = () => {
  return (
    <>
      <Breadcrumb title={data.projects[0].title} subtitle={data.projects[0].subtitle} project />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Overview" />
              {data.projects[0].overview.map((item, index) => (<p className="text-lg text-gray-600 mb-6" key={index}>{item}</p>
              ))}
              <div className="bg-gray-50 border-s-4 border-brand-orange p-4 mb-8">
                <h3 className="font-bold mb-2">Event Highlights</h3>
                <ul className="space-y-2">
                  {data.projects[0].stats.map((stat, index) => (
                    <li className="flex items-start" key={index}>
                      <HiChevronRight className="h-5 w-5 text-brand-orange me-2 mt-0.5" />
                      <span>{`${stat.value} ${stat.statement}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <FramedImage src="/images"
              alt="Tech for Economic Recovery Hackathon" />
          </div>
        </div>
      </section>

      {/* Our Role Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Leadership Role"
            subtitle="YemenInnovators served as the lead organizer and facilitator for this landmark event."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.projects[0].roles.map((role, index) => (
              <Card
                key={index}
                title={role.title}
                description={role.description}
                icon={iconMapping[role.icon]}
                service
              />
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Implementation Approach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We implemented this hackathon using a carefully designed approach
              that emphasized inclusion, creativity, and tangible outcomes. Key
              elements included:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <HiCheckCircle className="h-5 w-5 text-brand-orange me-3 mt-0.5" />
                <div>
                  <span className="font-bold">Challenge Definition:</span>
                  <span className="text-gray-600">
                    {" "}
                    Working with economic experts to define relevant, specific
                    challenges.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <HiCheckCircle className="h-5 w-5 text-brand-orange me-3 mt-0.5" />
                <div>
                  <span className="font-bold">Diverse Participation:</span>
                  <span className="text-gray-600">
                    {" "}
                    Ensuring geographical, gender, and skill diversity among
                    participants.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <HiCheckCircle className="h-5 w-5 text-brand-orange me-3 mt-0.5" />
                <div>
                  <span className="font-bold">Expert Mentorship:</span>
                  <span className="text-gray-600">
                    {" "}
                    Providing teams with access to technical and domain experts
                    throughout the event.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <HiCheckCircle className="h-5 w-5 text-brand-orange me-3 mt-0.5" />
                <div>
                  <span className="font-bold">Implementation Focus:</span>
                  <span className="text-gray-600">
                    {" "}
                    Emphasizing solutions that could be realistically
                    implemented with available resources.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Impact & Results"
            subtitle="The hackathon generated significant outcomes for participants and the broader tech ecosystem in Yemen."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {data.projects[0].stats.map((stat, index) => (
              <Stat
                key={index}
                number={stat.value}
                statement={stat.statement}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FramedImage
              src="/images"
              alt="Tech for Economic Recovery Impact"
            />
            <div>
              <h3 className="text-2xl font-bold mb-6">{data.projects[0].outputs.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{data.projects[0].outputs.subtitle}</p>
              <ul className="space-y-4">
                {data.projects[0].outputs.outcoms.map((outcome, index) => (
                  <li className="flex items-start" key={index}>
                    <HiCheckCircle className="h-5 w-5 text-brand-orange me-3 mt-0.5" />
                    {Object.keys(outcome).map((key, value) => (
                        <div key={key}>
                          <span className="font-bold">{`${key}: `}</span>
                          <span className="text-gray-600">{outcome[key]}</span>
                        </div>
                    ))}
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What People Said"
            subtitle="Hear from participants and partners about their experience with the Tech for Economic Recovery hackathon."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.projects[0].testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Team"
            subtitle="The hackathon implemented by a significant team of ..."
            centered
          />

          <Tabs aria-label='Project Team' variant="default">
            {data.projects[0].team.map((team, index) => (
              <TabItem title={team.title} key={index} active>
                {team.members.map((member, index) => (
                  <div key={index}>
                    <h3 className="font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.position}</p>
                  </div>
                ))}
              </TabItem>
            ))}
          </Tabs>
        </div>
      </section>

      <CTA
        title="Ready to Create Your Own Success Story?"
        description="Let us help you design and facilitate a powerful innovation event tailored to your specific challenges and goals."
        text="Discuss Your Project"
      />
    </>
  );
};

export default CaseStudy;
