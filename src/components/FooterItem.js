import React from 'react'

function FooterItem(props) {
    const linksArray = props.contents.map(link => 
        <li><a href="#">{link}</a></li>
        )
    
    return (
        <div className="block">
            <h5>{props.title}</h5>
            <ul>
            {linksArray}
            </ul>
        </div>
    )
}

export default FooterItem
