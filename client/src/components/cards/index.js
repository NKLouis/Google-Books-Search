import React from "react";

export function Cards(props){

return(
<div>
    <div className= "card-header">
<h3><strong>{props.title}</strong></h3>
    </div>
<div className = "card-body">
    {props.children}</div>
</div>


)



}