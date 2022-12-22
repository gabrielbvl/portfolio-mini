import { useState, useEffect } from "react";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment, AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
    const [copyEmail, setCopyEmail] = useState("");
    useEffect(() => {
        setCopyEmail("gabrielbvlima@gmail.com");
    });

    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(88) 93300-5462</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <div id="div-btn">
                        <p>gabrielbvlima@gmail.com</p>
                        <CopyToClipboard text={copyEmail}>
                            <AiOutlineCopy />
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Iguatu - CE</p>
                </div>
            </div>
        </section>
    );
};

export default InformationContainer;
