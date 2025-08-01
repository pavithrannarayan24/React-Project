function Header(){
    const mystyle={
        color:"blue",backgroundColor:"yellow"

    }
    return(
        <>
        <h1 style={mystyle}>Hello styling</h1>
        {/* <h1 style={{color:"blue",backgroundColor:"yellow"}}>Hello styling</h1> */}
        <p>Add a little style</p>
        
        </>
    )
}
export default Header;