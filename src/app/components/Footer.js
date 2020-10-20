import React from 'react';
import "./styles/Footer.css";

function Footer(props) {
    return (
            <footer className="footer">
                <h6>Data provided by <a href="https://covid19-api.org/" target="_blank">covid19-api.org</a></h6>
                <h6><a href="https://github.com/OscarScrooge/covid19-tracker" target="_blank">@OscarScrooge</a></h6>
            </footer>
    );
}

export default Footer;
