import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "Who can Participate?",
    answer: "Any high school, undergraduate or a graduate student across India (and beyond) can participate.",
  },
  {
    question: "Do I need an idea to apply?",
    answer: "Yes, you need an idea to apply for HackFest",
  },
  {
    question: "How will the ideas be evaluated?",
    answer: "Yes, you need an idea to apply for HackFest",
  },
  {
    question: "What can be the size of Team?",
    answer: "We believe in 'the bigger, the better'. Hence, a team can comprise of 2-4.",
  },
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-mono">
      <div>
        <h2 className="text-center mt-8 text-6xl md:text-7xl lg:text-8xl text-purple-100">FAQs</h2>
        <div className="flex flex-col items-center mt-8">
          <div className="w-full md:w-[540px]">
            {FAQ_DATA.map((faq, index) => (
              <div
                className="w-full mb-4 rounded-lg overflow-hidden"
                key={index}
              >
                <div
                  className={`flex items-center justify-between p-4 cursor-pointer bg-purple-100 border border-purple-600 ${
                    openIndex === index ? "bg-purple-100" : ""
                  } transition-colors duration-300`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-purple-600 ${openIndex === index ? "font-semibold" : ""}`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform ${
                      openIndex === index ? "rotate-180" : ""
                    } text-purple-600 transition-transform duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div
                  className={`p-4 ${
                    openIndex === index ? "block" : "hidden"
                  } bg-purple-300`}
                >
                  <span className="text-purple-600 break-words">{faq.answer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;