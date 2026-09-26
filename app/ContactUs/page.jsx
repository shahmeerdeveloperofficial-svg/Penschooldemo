import HeroHeader from "@/components/HeroHeader";

const ContactUs = () => {
  return (
    <main>
      <HeroHeader
        title={"Contact Us"}
        description="PEN School System"
      />

      <section className="maxWSec px-6 sm:px-12 py-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-grayL p-8 bg-white shadow-sm">
          <h2 className="h3 mb-4">School Information</h2>
          <div className="space-y-4 text-base sm:text-lg text-grayD">
            <p>
              <span className="font-semibold text-dark">School Name:</span>{" "}
              PEN School System
            </p>
            <p>
              <span className="font-semibold text-dark">City:</span> Pakpattan,
              Punjab
            </p>
            <p>
              <span className="font-semibold text-dark">Helpline 1:</span>{" "}
              <a href="tel:+923016666233" className="text-main font-bold">
                +92 301 6666233
              </a>
            </p>
            <p>
              <span className="font-semibold text-dark">Helpline 2:</span>{" "}
              <a href="tel:+923246173226" className="text-main font-bold">
                +92 324 6173226
              </a>
            </p>
            <p>
              <span className="font-semibold text-dark">Branches:</span>{" "}
              <span>16 Operational Campuses Across Punjab</span>
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-sec text-light p-8">
          <h2 className="h3 mb-4">Admission Help</h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/90">
            Parents are welcome to contact the school for admission guidance,
            registration details, class placement information, and general
            school queries. Our team will help you with the next step and share
            the information you need.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/OnlineAdmission"
              className="rounded-full bg-main px-5 py-3 font-medium text-white shadow-md hover:opacity-90 transition-opacity"
            >
              Open Admission Form
            </a>
            <a
              href="https://wa.me/923016666233"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp (+92 301 6666233)
            </a>
            <a
              href="tel:+923246173226"
              className="rounded-full border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors"
            >
              Call (+92 324 6173226)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
