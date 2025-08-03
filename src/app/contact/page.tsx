import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import data from "@/data.json";

const Contact = () => {
  return (
    <>
      <Breadcrumb
        title="Contact Us"
        subtitle="Have a question or want to discuss how we can help with your project? We'd love to hear from you."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get in Touch" />
              <p className="text-lg text-gray-600 mb-8">
                Whether you're interested in our services, have questions about
                our approach, or want to explore partnership opportunities,
                we're here to help.
              </p>

              <div className="space-y-6 mb-8">
                {data.contacts.map((contact, key) => (
                  <div className="flex items-start" key={key}>
                    <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center me-4">
                      {/* <MapPin className="h-6 w-6 text-brand-blue" /> */}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{contact.label}</h3>
                      <p className="text-gray-600">{contact.label != "Address" ? <bdo dir="ltr">{contact.value}</bdo> : contact.value}</p>
                    </div>
                  </div>
                ))}

                <div>
                  <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Sunday - Thursday:</span> 9:00
                    AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Friday - Saturday:</span>{" "}
                    Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our services."
            centered
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {data.faq.map((item, index) => (
                <div className="bg-white p-6 rounded-xl shadow-sm" key={index}>
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;