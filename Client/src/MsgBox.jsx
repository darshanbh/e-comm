export default function MsgBox({userName,txtcolor}){
    let styles ={color:txtcolor};
    return (
        <>
        <h1 style={styles}>Hey Buddy.. {userName}</h1>
        </>
    );
}