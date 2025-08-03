interface BreadcrumbProps {
  title: string;
  subtitle: string;
  project?: boolean;
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle, project }) => {
  return (
    <section className={`bg-${project ? 'brand-blue text-white' : 'gray-50'} py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {project && <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">
            CASE STUDY
          </span>}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className={`text-xl text-gray-${project ? '100' : '600'}`}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;