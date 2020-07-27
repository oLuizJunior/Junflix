import React from 'react';

function ButtonLink(props) {
    // props => {className: "o que alguém passar", href: "/"}
    console.log(props);
    return (
        <a href={props.href} ClassName={props.className}>
           {props.children}
            
        </a>
    );

}

export default ButtonLink; 