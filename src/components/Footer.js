import React from 'react';
import FooterItem from './FooterItem';

const Footer = () => {

    const footerData = [
        {
            id: 1,
            title: "Components",
            contents: ["🔠 About", "🐕‍🦺 Services", "📃 Categories"]
        },
        {
            id: 2,
            title: "Contacts",
            contents: ["🎯 Address: KK 34 Ave, Kigali", "📞 Phone: 0788551997", "📩 E-mail: likehome@gmail.com"]
        },
        {
            id: 3,
            title: "Social Media",
            contents: ["📱 Twitter", "📱 Facebook", "📱 Instagram"]
        }
    ]

    const footerArray = footerData.map(item =>
        <FooterItem
            key={item.id}
            title={item.title}
            contents={item.contents}
        />)

    return (
        <div className="footerContainer">

            <div className="threeblocks">
                {footerArray}
            </div>

            <div id="copyright">
                &copy; Niyomwungeri 2020
            </div>

        </div>
    );
}

export default Footer;
