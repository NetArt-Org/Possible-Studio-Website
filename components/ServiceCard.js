import { useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js 13+ (App Router)
const ServiceCard = ({ title, description, image }) => {
    const [hover, setHover] = useState(false);
    const router = useRouter();
    const handleClick = () => {
        const formattedTitle = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-")); 
        router.push(`/contact-us?service=${formattedTitle}`);
    };
    
    const styles = {
        card: {
            position: "relative",
            width: "80%",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: hover ? "flex-start" : "center",
            transition: "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
            cursor: "pointer",
            overflow: "hidden",
            padding: "40px",
            border: "1px solid #FDC500",
            borderRadius: "20px",
            backgroundColor: hover ? "#FFD700" : "transparent",
        },
        image: {
            position: "absolute",
            top: "0",
            right: "0",
            width: "130px",
            height: "auto",
            objectFit: "cover",
            transition: "opacity 0.3s ease-in-out",
            opacity: hover ? 1 : 0,
        },
        textContainer: {
            width: "80%",
            transition: "opacity 0.3s ease-in-out",
            opacity: hover ? 1 : 0,
            textAlign: "left",
        },
        headingCenter: {
            fontSize: "28px",
            lineHeight: "40px",
            fontWeight: "bold",
            position: "absolute",
            color: "#FDC500",
            transition: "opacity 0.3s ease-in-out",
            opacity: hover ? 0 : 1,
            textAlign: "center",
            width:"80%",
        },
        headingLeft: {
            fontSize: "28px",
            lineHeight: "40px",
            fontWeight: "bold",
            color: "black",
        },
        description: {
            fontSize: "16px",
            lineHeight: "25px",
            marginTop: "0px",
            color: "black"
        },
    };

    return (
        <div
            style={styles.card}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
        >
            <img src={image} alt="icon" style={styles.image} />
            <div style={styles.headingCenter}>{title}</div>
            {hover && (
                <div style={styles.textContainer}>
                    <div style={styles.headingLeft}>{title}</div>
                    <div style={styles.description}>{description}</div>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
