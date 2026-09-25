"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Foundational Learning",
    color: "bg-[#c33e3f]",
    desc: "We focus on concept-based teaching in core subjects so students build clear understanding, confidence, and steady academic progress from the early years onward.",
  },
  {
    title: "Caring Environment",
    color: "bg-[#232d6a]",
    desc: "PEN School System believes children thrive in a secure and respectful atmosphere where teachers guide with patience, discipline, and personal attention.",
  },
  {
    title: "Character Building",
    color: "bg-[#f0b24b]",
    desc: "Strong manners, honesty, responsibility, and respect are woven into school life so that students grow not only academically, but also morally and socially.",
  },
  {
    title: "Parent Partnership",
    color: "bg-[#4d6b3c]",
    desc: "We believe real progress happens when school and home work together, so we keep communication open and involve parents in each child's learning journey.",
  },
  {
    title: "Student Confidence",
    color: "bg-[#b76d2d]",
    desc: "Through presentations, class participation, activities, and mentorship, students learn to express themselves, take initiative, and develop healthy self-belief.",
  },
  {
    title: "Activity-Based Growth",
    color: "bg-[#7d8b32]",
    desc: "Sports, clubs, assemblies, and school events help students discover interests, improve teamwork, and enjoy a balanced school experience beyond textbooks.",
  },
  {
    title: "Progress Monitoring",
    color: "bg-[#5f4b8b]",
    desc: "Regular assessments and feedback help us understand each learner's strengths and needs, allowing timely support and consistent academic improvement.",
  },
  {
    title: "Community Values",
    color: "bg-[#3b6778]",
    desc: "As a school rooted in Pakpattan, we aim to serve families with sincerity, quality teaching, and an educational culture that supports long-term growth.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function Card({ color, title, desc }) {
  return (
    <div className="flex-1 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 bg-white border border-main group">
      <h3 className="text-base sm:text-xl font-semibold mb-2 flex items-center gap-2 relative py-2 pl-4">
        <div
          className={`${color} h-full w-1.5 group-hover:w-full transition-all duration-300 rounded-md inline-block absolute left-0 top-0`}
        ></div>
        <span className="inline-block relative z-10 group-hover:text-white transition-all duration-300">
          {title}
        </span>
      </h3>
      <p className="text-gray space-y-3 text-xs sm:text-base leading-normal">
        {desc}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section className="maxWSec px-6 sm:px-12 py-12 flex gap-12 flex-col">
      <div className="text-center space-y-4">
        <h2 className="h2">
          Why Families Choose <span className="text-main">PEN School System</span>
        </h2>
        <h2 className="h3 text-gray !font-normal">
          A value-driven school experience designed for meaningful learning
        </h2>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="w-full sm:w-1/2 xl:w-1/3 max-sm:pb-4 sm:p-3 flex"
          >
            <Card {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
