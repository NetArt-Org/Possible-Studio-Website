  
  const styles = {
    container: {
      display: "flex",
      gap: "16px",
    },
    column: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "16px",
    },
    card: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height:"100%",
      display: "block",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    overlay: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      alignItems: "flex-start",
      color: "#fff",
      opacity: "0", 
      transition: "opacity 0.3s ease",
      padding: "16px",
    },
    margin0:{
        margin:0,
        lineHeight:"16px",
        fontSize:"14px"
    },
    cardHover: {
      opacity: "1", 
    },
  };
  
  const MediaBentoGrid = ({cardData}) => {
    return (
      <div style={styles.container}>
        {/* Column 1 */}
        <div style={styles.column}>
          {cardData && cardData.col1.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.children[1].style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.children[1].style.opacity = "0")}
            >
              <img src={item.src} alt={item.title} style={styles.image} />
              <div style={styles.overlay}>
                <h3 style={{margin:"0"}}>{item.title}</h3>
                <p style={styles.margin0}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Column 2 */}
        <div style={styles.column}>
          {cardData && cardData.col2.map((item, index) => (
            <div
              key={index}
              style={{...styles.card,flexGrow:"1"}}
              onMouseEnter={(e) => (e.currentTarget.children[1].style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.children[1].style.opacity = "0")}
            >
              <img src={item.src} alt={item.title} style={{...styles.image}} />
              <div style={styles.overlay}>
                <h3 style={{margin:"0"}}>{item.title}</h3>
                <p style={styles.margin0}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MediaBentoGrid;
  