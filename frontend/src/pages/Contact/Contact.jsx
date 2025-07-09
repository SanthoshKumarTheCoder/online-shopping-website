import React, { useEffect, useState } from 'react';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // To show loading state
  const [isSuccess, setIsSuccess] = useState(false); // To show success message
  const [errorMessage, setErrorMessage] = useState(''); // To show error message

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
  
    const subject = 'Thank you for joining  Santhosh Kumar website 🤩'; // Example subject
    const body = `Hi there,

We're excited to have you join the Santhosh Kumar website! 🤩
Thank you for subscribing – you've officially entered a world of exclusive updates, new content, and plenty of exciting surprises.

Keep an eye out for all the amazing things coming your way!

Cheers,
 Santhosh Kumar 😄`; // Example body
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: email, // Send the email as the recipient
          subject: subject,  // Send a subject
          body: body,        // Send the body of the email
        }),
      });
  
      if (response.ok) {
        // Handle success
        setIsSuccess(true);
        setErrorMessage('');
        setEmail(''); // Reset email input field
      } else {
        // Log the response text to help debug the issue
        const text = await response.text();
        console.error('Error response:', text); // Log the HTML error page
        setErrorMessage('Error sending message');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      setIsSuccess(false);
      setErrorMessage('Network error, please try again later');
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000); // Hide after 5 seconds
  
      return () => clearTimeout(timer); // Cleanup on unmount or when isSuccess changes
    }
  }, [isSuccess]);

  return (
    <div className="contact">
      <div className="contact-des">
        <h6>Let's Connect</h6>
        <h2>Be a Part of the Santhosh Kumar Experience.</h2>
        <p>
          Hey you, sign up — it only takes a second to be the first to find out
          about our latest news and promotions.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="email">
            <div className="email-icon">
              <span className="material-symbols-outlined">mail</span>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange} // Add the email change handler
                required
              />
            </div>

            {/* Conditionally show the button if the email is valid */}
            {isValidEmail && !isLoading && (
              <button className="button" type="submit">
                <div className="outline"></div>
                <div className="state state--default">
                  <div className="icon">
                    {/* Paper Plane Icon */}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g style={{ filter: 'url(#shadow)' }}>
                        <path
                          d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.11 14.4C9.92 14.4 9.73 14.33 9.58 14.18C9.29 13.89 9.29 13.41 9.58 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <filter id="shadow">
                          <feDropShadow
                            dx="0"
                            dy="1"
                            stdDeviation="0.6"
                            floodOpacity="0.5"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <p>
                    {Array.from('SendMessage').map((char, i) => (
                      <span key={i} style={{ '--i': i }}>
                        {char}
                      </span>
                    ))}
                  </p>
                </div>
              </button>
            )}
          </div>
          <div className='message-div'>
        
            {/* Show loading state */}
            {isLoading && <p className='message-send'>Sending...</p>}

            {/* Show success message */}
            {isSuccess && <p className='message-send'>Message sent successfully!</p>}

            {/* Show error message */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
