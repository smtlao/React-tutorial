import React from 'react'

// function Greet(){
//     return <h1>Hallo HotDawg</h1>
// }
const Greet = (props) => {
    return (
        <div>
            <h1>Hallo E6 {props.name}</h1>
            {props.children}
        </div>
    )
}
export default Greet;
