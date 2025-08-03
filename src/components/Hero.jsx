import Btn from "./Btn";

const Hero = ({title, description}) => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-brand-blue to-brand-blue-light text-white py-20 md:py-28 items-center flex">
      <div
        className="absolute inset-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/about/about-dark-01.png)" }}
      ></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Btn
              className="bg-brand-orange hover:bg-brand-orange-light text-white btn-hover"
              link="/services"
              text="Our Services"
            />
            <Btn
              className="bg-transparent text-white border-white hover:bg-white/10 btn-hover"
              link="/contact"
              text="Get in Touch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
