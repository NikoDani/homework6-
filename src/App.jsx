import { useState,useEffect } from"react";

export default function App(){
  const [selected, setSelected] =useState(null);
  const [submitted, setSubmitted] =useState(false);
  const handleSelect=(value)=> setSelected(value);
  const handleSubmit=() => {
  if(!selected)return;
    setSubmitted(true);
  };
  return(
  <div className="flex items-center justify-center min-h-screen bg-[#141519] px-4">
    <div className="bg-[#1f2630] text-white w-full max-w-sm sm:max-w-md p-6 rounded-2xl shadow-lg transition-all">
      {!submitted ? (
        <div className="flex flex-col gap-6">
          {}
          <div className="bg-gray-700 w-10 h-10 flex items-center justify-center rounded-full">
            ⭐
           </div>

          {}
          <div>
            <h2 className="text-lg font-semibold">How did we do?</h2>
            <p className="text-sm text-gray-400 mt-2">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          {}
          <div className="flex justify-between">
            {[1,2,3,4,5].map((num) => (
              <button
                key={num}
                onClick={() => handleSelect(num)}
                className={`w-10 h-10 rounded-full transition-colors ${
                  selected === num
                    ? "bg-gray-400"
                    : "bg-gray-700 hover:bg-gray-500"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          {}
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-gray-600 py-2 rounded-full uppercase font-bold tracking-wide"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 text-center animate-fadeIn">
          <img
            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-phone-call-user-interface-flatart-icons-outline-flatarticons.png"
          className="w-16"
          alt="Phone"
          />
          <p className="bg-gray-700 text-orange-400 px-3 py-1 rounded-full text-sm">
            You selected {selected} out of 5
          </p>
          <h2 className="text-lg font-semibold">Thank you!</h2>
          <p className="text-sm text-gray-400">
            We appreciate you taking the time to give a rating.
          </p>
        </div>
      )}
      </div>
    </div>
  );
}