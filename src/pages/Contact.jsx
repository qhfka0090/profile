import { Mail } from 'lucide-react';

function Contact(){
    return(
        <section id='contact'>
            <div className="contact_inner">
                <div className="contact_text">
                    <a href="mailto:qhfka0090@naver.com" className="mail">
                        <Mail className="mail-icon"/>
                        <h2 className="contact_title"> Contact Me </h2>
                        <p>연락처 : <em>010-9011-5301</em></p>
                        <p>메일 : <em>qhfka0090@naver.com</em></p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;