import Image from 'next/image'
interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position, company, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="text-brand-orange mb-4">
        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1 36C9.5 36 6.53333 34.8 4.2 32.4C1.86667 29.9333 0.7 26.8667 0.7 23.2C0.7 19.6 1.73333 16.0667 3.8 12.6C5.93333 9.13333 9 5.66667 13 2.2L19.4 7.4C16.0667 10.0667 13.6667 12.6667 12.2 15.2C10.8 17.7333 10.1 20.1333 10.1 22.4H12.8C15.6 22.4 17.8667 23.0667 19.6 24.4C21.4 25.7333 22.3 27.8 22.3 30.6C22.3 32.2 21.6333 33.6 20.3 34.8C19.0333 35.6 16.7 36 13.1 36ZM35.5 36C31.9 36 28.9333 34.8 26.6 32.4C24.2667 29.9333 23.1 26.8667 23.1 23.2C23.1 19.6 24.1333 16.0667 26.2 12.6C28.3333 9.13333 31.4 5.66667 35.4 2.2L41.8 7.4C38.4667 10.0667 36.0667 12.6667 34.6 15.2C33.2 17.7333 32.5 20.1333 32.5 22.4H35.2C38 22.4 40.2667 23.0667 42 24.4C43.8 25.7333 44.7 27.8 44.7 30.6C44.7 32.2 44.0333 33.6 42.7 34.8C41.4333 35.6 39.1 36 35.5 36Z" fill="currentColor"/>
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <Image src={image} alt={name} width={1000} height={1000} className="w-12 h-12 rounded-full me-4 object-cover" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
