// Display.jsx
import React from "react";

// eslint-disable-next-line react/prop-types
const Display = ({ text, displayvalue }) => {
  console.log("Display Component Rendered ", { displayvalue });
  const displayText = `This person's ${text} is ${displayvalue}`;
  return (
    <p>
      {displayText}
    </p>
  );
};

const MemoizedDisplay = React.memo(Display);
export default MemoizedDisplay;
// export default Display;
