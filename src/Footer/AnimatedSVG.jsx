import { useState } from "react";

function AnimatedSvg() {
  const [sequence, setSequence] = useState(1);

  function getNextSequence() {
    if (sequence === 4) {
      return 1;
    } else {
      return sequence + 1;
    }
  }

  function getTransformValues() {
    switch (sequence) {
      case 1:
        return "rotate(45deg)";
      case 2:
        return "rotate(90deg)";
      case 3:
        return "rotate(135deg)";
      case 4:
        return "rotate(180deg)";
      default:
        return "";
    }
  }

  function getStrokeWidth() {
    switch (sequence) {
      case 1:
        return 20;
      case 2:
        return 80;
      case 3:
        return 180;
      case 4:
        return 20;
      default:
        return 0;
    }
  }

  function onAnimationIteration() {
    setSequence(getNextSequence());
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      width="800"
      height="800"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <clipPath id="__lottie_element_2">
          <rect width="800" height="800" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g
        clipPath="url(#__lottie_element_2)"
        style={{
          transformOrigin: "center",
          transform: `matrix(0.9999204874038696,0.012609667144715786,-0.012609667144715786,0.9999204874038696,400,400) ${getTransformValues()}`,
        }}
        strokeWidth={getStrokeWidth()}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fillOpacity="0"
        strokeMiterlimit="4"
        stroke="rgb(0,0,0)"
        strokeOpacity="1"
      >
        <path d=" M-243.26100158691406,-243.22900390625 C-243.26100158691406,-243.22900390625 243.26100158691406,243.22900390625 243.26100158691406,243.22900390625 M-243.22999572753906,243.25999450683594 C-243.22999572753906,243.25999450683594 243.22999572753906,-243.26100158691406 243.22999572753906,-243.26100158691406 M-344.0010070800781,0.02199999988079071 C-344.0010070800781,0.02199999988079071 344.0010070800781,-0.02199999988079071 344.0010070800781,-0.02199999988079071 M-0.02199999988079071,-344 C-0.02199999988079071,-344 0.02199999988079071,344 0.02199999988079071,344" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`${getTransformValues()}`}
          to={`${getTransformValues()}`}
          
          to={${getTransformValues(45, 80)}}
dur="2s"
repeatCount="indefinite"
/>
<animate attributeName="stroke-width"
from={${getStrokeWidthValue()}}
to="80"
dur="2s"
repeatCount="indefinite"
begin="0s"
/>
<animateTransform
attributeName="transform"
type="rotate"
from={${getTransformValues(45, 80)}}
to={${getTransformValues(90, 180)}}
dur="2s"
repeatCount="indefinite"
begin="2s"
/>
<animate attributeName="stroke-width" 
       from="80" 
       to="180"
       dur="2s"
       repeatCount="indefinite"
       begin="2s"
     />
<animateTransform
attributeName="transform"
type="rotate"
from={${getTransformValues(90, 180)}}
to={${getTransformValues(135, 20)}}
dur="2s"
repeatCount="indefinite"
begin="4s"
/>
<animate attributeName="stroke-width" 
       from="180" 
       to="20"
       dur="2s"
       repeatCount="indefinite"
       begin="4s"
     />
<animateTransform
attributeName="transform"
type="rotate"
from={${getTransformValues(135, 20)}}
to={${getTransformValues(180, 80)}}
dur="2s"
repeatCount="indefinite"
begin="6s"
/>
<animate attributeName="stroke-width"
from="20"
to={${getStrokeWidthValue()}}
dur="2s"
repeatCount="indefinite"
begin="6s"
/>
</g>
</svg>
);
}

export default AnimatedSVG;