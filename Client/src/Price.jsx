export default function Price({oldPrices,newPrices}){
    let oldstyles={
        textDecoration:"line-through",
    };
    let newstyles={
        fontWeight:"bold",
    };
   let styles = {
    backgroundColor: "#46bbe2ff",
    height: "30px",
    width: "260px", // Make it match the container's width
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginTop: "auto", // Push it to the bottom inside flex column
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "-15px",
};
let btnstyles = {
    border:'none',
    borderRadius:'5px',
    width:'80px',
    backgroundColor:"#eef745ff",
    marginRight: "-5px",
    alignItems: "center",

}


    return(
        <>
        <div style={styles}>
            <span style={oldstyles}>{oldPrices}</span>
            &nbsp;&nbsp;
            <span style={newstyles}>{newPrices}</span>
            <button style={btnstyles}> Buy</button>
        </div>
        </>
    );
}