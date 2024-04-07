import React ,{useState} from 'react'

export default function StepProgressBar() {
    const[currentStep, setCurrentStep] = useState(1);
    const totalStep = 4;

    const handleNext = () => {
        if(currentStep < totalStep) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if(currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }

        console.log(currentStep);
    };

  return (
    <>
       <div className="progress-container">
            <div className="progress" id="progress"></div>
                
                {/* Create steps dynamically based on totalSteps */}
                {Array.from({length: totalStep}, (_, index) => (
                    <div
                       key={index}
                       className={`circle ${index + 1 === currentStep ? 'active' : ''}`}
                       onClick={() => {
                        if (index + 1 !== currentStep) {
                            setCurrentStep(index + 1);
                          } 

                       }}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <button className="btn" 
                id="prev"
                onClick={handlePrevious} 
                disabled ={currentStep === 1}>
                Prev
            </button>

            <button className="btn" 
                id="next"
                onClick={handleNext}
                disabled={currentStep === totalStep}>
                Next
            </button>
    </>
    
  )
}
