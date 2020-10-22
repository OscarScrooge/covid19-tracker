import React from 'react';
import "./styles/Footer.css";

function Footer(props) {
    return (
            <footer className="footer">
                <h5>Data provided by <a href="https://covid19-api.org/" target="_blank">covid19-api.org</a></h5>
                <h5><a href="https://github.com/OscarScrooge/covid19-tracker" target="_blank">@OscarScrooge</a></h5>
            </footer>
    );
}

export default Footer;
