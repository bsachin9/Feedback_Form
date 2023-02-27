import React from "react"

function Header({text,bgColor,textColor,textAlign}){
    const headerStyle={
     backgroundColor:bgColor, 
     color:textColor,
     textAlign:textAlign
    }

return <div style={headerStyle}>{text}</div>
}

Header.defaultProps ={
    text:'this is it got it in center',
    bgColor:'rgba(4,5,3,0.4)',
    textColor:'#ff6a75',
     textAlign:'center'
}

export default Header