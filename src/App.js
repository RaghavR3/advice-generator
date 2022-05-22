import "./index.css";
import Dice from "./components/dice";
import { useState, useEffect } from "react";

const fetchQuotes = async (setAdviceId, setAdviceText) => {
  const response = await fetch("https://api.adviceslip.com/advice");

  const data = await response.json();

  setAdviceId(data.slip.id);
  setAdviceText(data.slip.advice);
};

function App() {
  const [transition, setTransition] = useState(false);

  const [adviceText, setAdviceText] = useState("");
  const [adviceId, setAdviceId] = useState(0);

  useEffect(() => {
    fetchQuotes(setAdviceId, setAdviceText);
  }, []);

  return (
    <div className="bg-primary-blue w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-secondary-blue flex flex-col justify-center items-center p-8 lg:p-12 rounded-2xl">
        <h3
          className={`${
            transition && "transition-all"
          } text-lime-green text-center text-base font-bold tracking-widest pb-6 transition-all`}
        >
          ADVICE #{adviceId}
        </h3>
        <h2
          className={`${
            transition && "transition-all"
          } text-primary-grey text-center text-2xl lg:text-3xl font-bold w-[15rem] lg:w-[30rem] pb-10 transition-all`}
        >
          “{adviceText}”
        </h2>
        <div className="hidden lg:block">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="block lg:hidden">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <Dice
          functions={[setAdviceText, setAdviceId, fetchQuotes, setTransition]}
        >
          {" "}
        </Dice>
      </div>
    </div>
  );
}

export default App;
