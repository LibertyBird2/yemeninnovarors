import data from '@/data.json'
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import Card from '@/components/Card';
import Btn from '@/components/Btn';

const Projects = () => {
    const projects = data.projects
    return (
        <>
            <Breadcrumb title="Our Projects" subtitle="..." />

            {/* Projects Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Latest Articles"
                        subtitle="Stay updated with our most recent insights, case studies, and thought leadership."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                            // image={project.image}
                            blog
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Btn className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white" text="All Events" />
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Get the latest insights on tech innovation and entrepreneurship in Yemen
                            delivered directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            />
                            <Btn className="bg-brand-blue hover:bg-brand-blue-light btn-hover" text="Subscribe" />
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
