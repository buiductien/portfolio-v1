"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const servicesList = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in web development, combining backend expertise in Java and C# with frontend technologies like HTML, CSS, JavaScript, Next.js, and Tailwind. My work focuses on crafting seamless and visually appealing digital experiences.",
    href: "",
  },
  {
    num: "02",
    title: "Cloud Computing",
    description:
      "I work extensively in cloud computing, leveraging AWS services like S3, Lambda, Batch, CloudWatch, and CloudTrail and EC2, along with Firebase, to create scalable, efficient, and well-monitored solutions for modern applications.",
    href: "",
  },
  {
    num: "03",
    title: "Database Design",
    description:
      "I have expertise in database design, working with SQL databases like MySQL and NoSQL. I also have experience in optimizing database performance, ensuring efficient queries, and maintaining data integrity for scalable and reliable data management systems.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I have experience in SEO, optimizing websites to be user-friendly and enhancing search visibility. My focus is on improving site performance, boosting interaction, and increasing search engine rankings for better user engagement.",
    href: "",
  },
];

const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesList.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full
                   bg-white group-hover:bg-accent transition-all 
                   duration-500 flex justify-center items-center 
                   hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* subtitle */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default services;
