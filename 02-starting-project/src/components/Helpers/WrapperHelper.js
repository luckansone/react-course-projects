import React from "react";

//We need this component to avoid redundant div blocks.
const Wrapper = (props) => {
    return props.children;
};

export default Wrapper;