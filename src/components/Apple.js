import React from "react";

class Apple extends React.Component{
    render(){
        const {appleInfo}=this.props
        const {type,color}=appleInfo

        return(
            <h2>i am {color} of {type} apple</h2>
        )
    }
}

export default Apple;