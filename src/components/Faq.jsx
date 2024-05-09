import {} from "react";
import Accordion from "./Accordion";

function Faq() {
  return (
    <div className="container mx-auto flex flex-col md:justify-start md:items-start justify-center items-center pt-28 mb-10  ">
      <div className="">
        <h1 className="text-5xl font-bold text-blue-800 m-2">FAQ</h1>
      </div>
      <div className=" border border-blue-600 rounded-lg w-2/3 py-1 px-4 mt-10 m-2 ">
        <Accordion
          title="Can education flashcard be used for all ahe group? "
          answer="Yes, education place card can be tailor to different age group and learning labels. There are price card designed for preschoolers elementary school students. High school student and event for call is level and adult learner"
        />
      </div>
      <div className="border border-blue-600 rounded-lg w-2/3 py-1 px-4 mt-5 m-2">
        <Accordion
          title="How do education flashcard work?"
          answer="Educational place card work by presenting a question or prompt on one side and the corresponding answer or information on the other user can review the card repeatedly. Ram forcing their memory and enhancing learning through repetition"
        />
      </div>
      <div className="border border-blue-600 rounded-lg w-2/3 py-1 px-4 mt-5 m-2">
        <Accordion
          title="Can education flashcard be used for prepration?"
          answer="Absolutely! Flash card are excellent tool for test preparation, allowing students to review key concept terms and fats. They provide a quick, focused way to reinforce knowledge before exam"
        />
      </div>
    </div>
  );
}

export default Faq;
