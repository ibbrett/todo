// Title.jsx
import React from "react";

const Title = () => {
    console.log("Title Component is rendered");
  return (
    <h1>useCallback Hook.</h1>
  );
};

const MemoizedTitle = React.memo(Title);
export default MemoizedTitle;
