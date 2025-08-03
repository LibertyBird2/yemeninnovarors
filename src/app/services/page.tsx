import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import CTA from '@/components/CTA';
import data from '@/data.json';
import Image from 'next/image';
import Btn from '@/components/Btn';
import { HiCheckCircle } from 'react-icons/hi';

const Services = () => {
  return (
    <main>
      <Breadcrumb title="Services" subtitle="..." />

      {data.services.map((service, index) => (
        <section id={service.id} key={index} className={`py-20 ${index % 2 && 'bg-red-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`order-${index % 2 ? '1' : '2'}`}>
                <Image className="h-16 w-16 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6" src={`/images/icon/${service.icon}.svg`} alt={service.label} width={45} height={45} />
                <SectionHeading title={service.label} />
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                {/* Render service details */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.details.map((detail, index) => (
                    <li className="flex items-start" key={index}>
                      <HiCheckCircle className="h-5 w-5 text-brand-orange me-2 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Btn className="bg-brand-blue hover:bg-brand-blue-light btn-hover" link="contact" text={service.buttonText} />
              </div>
              <Image src='/images/about/about-dark.png' alt={service.label} className={`order-${index % 2 ? '2' : '1'}`} width={450} height={450} />
            </div>
          </div>
        </section>
      ))}

      <CTA
        title='Ready to Transform Your Tech Initiative?'
        description='Contact us today to discuss how our services can help you achieve your technology and innovation goals.'
        text='Schedule a Consultation'
      />
    </main>
  );
};

export default Services;
