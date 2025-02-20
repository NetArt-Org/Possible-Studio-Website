import React, { useState, useEffect } from "react";

const TextReveal = () => {
    const words = ["The Talent Hub", "Creative Agency", "Based in Coimbatore"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Faster cycle
        return () => clearInterval(interval);
    }, []);

    // Define animation styles for each position
    const animations = [
        { animation: "forceFromTop 0.4s cubic-bezier(0.6, 0, 0.4, 1) forwards" }, // Top entry
        { animation: "forceFromBottomLeft 0.4s cubic-bezier(0.6, 0, 0.4, 1) forwards" }, // Bottom-left entry
        { animation: "forceFromBottomRight 0.4s cubic-bezier(0.6, 0, 0.4, 1) forwards" }, // Bottom-right entry
    ];

    // Keyframes for faster and forceful entry
    const keyframes = `
    @keyframes forceFromTop {
        0% { transform: translateY(-12px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes forceFromBottomLeft {
        0% { transform: translate(-10px, 12px); opacity: 0; }
        100% { transform: translate(0, 0); opacity: 1; }
    }
    @keyframes forceFromBottomRight {
        0% { transform: translate(10px, 12px); opacity: 0; }
        100% { transform: translate(0, 0); opacity: 1; }
    }
  `;

    return (
        <div
            className="animation-heading"
            style={{
                fontSize: "40px",
                lineHeight: "55px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                flexWrap:"wrap"
            }}
        >
            <style>{keyframes}</style> {/* Inject animations */}
            <span style={{marginRight:"10px"}}>Possible Studio is {index==1? 'a':''}</span>
            <span
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minWidth: "220px",
                    color: "#FDC500",
                    position: "relative",
                    height: "1em", // Ensures it matches line height
                    // overflow: "hidden",
                }}
            >
                <span
                    key={index}
                    style={{
                        display: "inline-block",
                        position: "absolute",
                        left: 0,
                        top: "-20%",
                        transform: "translateY(-50%)", // Perfect vertical alignment
                        whiteSpace: "nowrap",
                        width: "100%",
                        textAlign: "left",
                        ...animations[index], // Dynamically apply animation
                    }}
                >
                    {words[index]}
                </span>
            </span>
        </div>
    );
};

export default TextReveal;
