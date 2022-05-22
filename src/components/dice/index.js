import { React, useState } from "react";

const Dice = (props) => {
  const [effect, setEffect] = useState(false);
  const [setAdviceText, setAdviceId, fetchQuotes, setTransition] =
    props.functions;

  return (
    <button
      className={`${
        effect && "animate-rotate"
      } bg-lime-green w-16 h-16 rounded-full flex flex-col justify-center items-center mt-10 -mb-16 lg:-mb-20 hover:shadow-lime-green hover:shadow-lg`}
      onClick={() => {
        setEffect(true);
        setTransition(true);
        fetchQuotes(setAdviceId, setAdviceText);
      }}
      onAnimationEnd={() => {
        setEffect(false);
        setTransition(false);
      }}
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#202733"
        />
      </svg>
    </button>
  );
};

export default Dice;
