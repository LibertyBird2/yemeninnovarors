import Btn from "./Btn";

interface CTAProps {
  title: string;
  description: string;
  text: string;
}
const CTA: React.FC<CTAProps> = ({ title, description, text }) => {
    return (
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
          <Btn className="bg-white text-brand-blue hover:bg-gray-100 btn-hover mx-auto" text={text} link='/content' />
        </div>
      </section>
    );
};

export default CTA;