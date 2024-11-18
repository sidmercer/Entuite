import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "What is your favorite template from BRIX Templates?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque praesentium accusantium, quam, est repudiandae magni, maiores quos dolor velit soluta eos! Reprehenderit accusantium atque tempore dolorem vel iure fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque praesentium accusantium, quam, est repudiandae magni, maiores quos dolor velit soluta eos! Reprehenderit accusantium atque tempore dolorem vel iure fuga",
    },
    {
      question: "How do you clone a template from the Showcase?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque praesentium accusantium, quam, est repudiandae magni, maiores quos dolor velit soluta eos! Reprehenderit accusantium atque tempore dolorem vel iure fuga?",
    },
    {
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "",
    },
    {
      question: "When was Webflow officially launched?",
      answer: "",
    },
    {
      question: "How do you integrate Jetboost with Webflow?",
      answer: "",
    },
  ];

  return (
    <section className="bg-bgdarkblue text-white w-full pb-96 py-20 px-6 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-semibold font-manrope custom-gradient-text text-left  mt-10 mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className=" font-manrope bg-[#FFFFFF05] backdrop-blur-md border border-gray-400 rounded-xl p-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b mb-4 mt-4 border-gray-700 last:border-none ${
                openIndex === index ? " " : ""
              }`}
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3
                  className={`text-[24px] font-manrope font-medium ${
                    openIndex === index ? "text-[#FE025E]" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-manrope font-medium ${
                    openIndex === index ? "text-[#FE025E]" : "text-gray-400"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 text-gray-300 font-manrope text-[18px] leading-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

          {/* img */}
        <div className="w-[1240px] h-[320px] border border-gray-600 mt-28 rounded-3xl flex items-center justify-between p-8 md:p-16 overflow-hidden">
        <div className=" relative  left-0 transform -top-4 -translate-x-1/4">
        <img
    src="/Assets/Group6.png" 
    alt="Left Image"
    class="relative  w-[419.48px] h-full "
  />
        </div>
        
            <div className="relative z-10 top-4 text-center text-white flex flex-col items-center gap-4">
          <p className="text-sm uppercase text-white">start a Project</p>
          <h1 className="text-4xl md:text-6xl w-[525px] h-[60px] font-semibold">Let’s work together</h1>
         
          <button className="mt-4  w-[250px] h-[52px]  bg-white text-[#FF007A] font-bold rounded-full shadow-md hover:shadow-lg hover:opacity-100">
            GET IN TOUCH <span className="ml-2">→</span>
          </button>
          <div className="absolute inset-0 w-[212px] h-[180px] left-32 bg-gradient-to-r from-[#FF007A] to-[#f00d60] opacity-100 blur-[100px] -z-10"></div>
        </div>
            <div className="relative right-0 transform  translate-x-1/4" >
            <img
    src="/Assets/Group 7.png" 
    alt="Right Image"
    class="relative  w-[419.48px] h-[321px]"
  />
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
