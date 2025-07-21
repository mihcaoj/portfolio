import { useState } from 'react';

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyToClipboard = () => {
    const emailAddress = "joachim.bono@protonmail.com";
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 3000); // Hide "Email Copied!" after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="row">
        <h2>Contact</h2>
        <div className="contact-section">
          <h3 className="contact-label">Get in touch <span className="click-to-copy">(Click to copy)</span></h3>
          <div className="email-container">
            <p className={`email-address ${emailCopied ? 'hide-email' : ''}`} id="email" onClick={copyToClipboard}>
              joachim.bono@protonmail.com
            </p>
            <p className={`email-copied ${emailCopied ? 'show-copied' : ''}`} id="emailCopied">
              Email Copied!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
