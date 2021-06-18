import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FadeInAnimation = ({
    children,
    wrapperElement = "div",
    delay = 0,
    ...props
}) => {
    const Component = wrapperElement;
    let compRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(compRef.current, { autoAlpha: 0 }, {
            autoAlpha: 1,
            delay,
        });
    }, [ compRef, delay ]);
    return (
        <Component ref={compRef} {...props}>
            {children}
        </Component>
    );
};

export default FadeInAnimation;