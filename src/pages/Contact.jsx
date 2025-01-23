import React from 'react';


const Contact = () => {
  return (
    <div style={{ width: "100%"}} className="container-fluid mt-4">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              {/* <h5 className="card-title">Nice Dent</h5> */}

              <div className="mb-3">
                <h6>Location:</h6>
                <p>Basai Chowk, Basai Road, Gurgaon, Haryana, 122001</p>
              </div>

              <div className="mb-3">
                <h6>Contact No.:</h6>
                <p>
                  <a href="tel:+919050331048" className="btn btn-link">Call: 9050331048</a> | 
                  <a href="https://wa.me/919050331048" target="_blank" rel="noopener noreferrer" className="btn btn-link">
                    WhatsApp: 9050331048
                  </a>
                </p>
                <p>
                  <a href="tel:+919315584580" className="btn btn-link">Call: 9315584580</a> | 
                  <a href="https://wa.me/919315584580" target="_blank" rel="noopener noreferrer" className="btn btn-link">
                    WhatsApp: 9315584580
                  </a>
                </p>
              </div>

              <div className="mb-3">
                <h6>Email:</h6>
                <p><a href="mailto:nicedent111@gmail.com">nicedent111@gmail.com</a></p>
              </div>

              {/* Social Media Links */}
              <div className="mb-3">
                <h6>Follow Us:</h6>
                <div className="d-flex justify-content-between">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Facebook
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                    Twitter
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                    Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="map-container mt-4">
                {/* Embedded Google Map */}
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.837059074993!2d77.01818271762172!3d28.47014870874625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d188a768b65a5%3A0x8c7610d452dbd330!2sBasai%20Chowk%2C%20Basai%20Rd%2C%20Sector%209%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1697295050410!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
