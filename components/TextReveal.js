import React, { useState, useEffect } from "react";

const TextReveal = () => {
    const words = ["The Talent Hub", "a Creative Agency", "Based in Coimbatore"];
    const [index, setIndex] = useState(0);

    // Keyframe animations as inline styles
    const animations = {
        slideDown: {
            animation: "slideDown 0.8s ease-in-out forwards",
        },
        slideUpLeft: {
            animation: "slideUpLeft 0.8s ease-in-out forwards",
        },
        slideUpRight: {
            animation: "slideUpRight 0.8s ease-in-out forwards",
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500); // Faster transition for seamless loop
        return () => clearInterval(interval);
    }, []);

    // Define styles for @keyframes using JavaScript
    const keyframes = `
    @keyframes slideDown {
      0% { transform: translateY(-100%); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideUpLeft {
      0% { transform: translate(-100%, 100%); opacity: 0; }
      100% { transform: translate(0, 0); opacity: 1; }
    }
    @keyframes slideUpRight {
      0% { transform: translate(100%, 100%); opacity: 0; }
      100% { transform: translate(0, 0); opacity: 1; }
    }
  `;

    return (
        <div className="animation-heading"
            style={{
                fontSize: "40px",
                lineHeight: "55px",
                fontWeight: "bold",
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                alignItems: "center",
                whiteSpace: "nowrap", // Prevents text from wrapping
            }}
        >
            <style>{keyframes}</style> {/* Inject animations */}
            <span>Possible Studio is </span>
            <span
                style={{
                    display: "inline-block",
                    minWidth: "220px", // Adjust based on longest word
                    textWrap: "wrap",
                    color: "#FDC500",
                    marginLeft: "10px",
                }}
            >
                <span
                    key={index}
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        position: "relative",
                        ...(index === 0 ? animations.slideDown : index === 1 ? animations.slideUpLeft : animations.slideUpRight),
                    }}
                >
                    {words[index]}
                </span>
            </span>
        </div>
    );
};

export default TextReveal;
