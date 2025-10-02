export default function ContactUsDetails() {
    return (
        <div className="container">
        <h1>Contact Us</h1>
      
        <div className="row align-items-center my-4">
          {/* Email Icon */}
          <div className="col-auto">
            <i className="bi bi-envelope-fill" style={{ fontSize: "30px" }}></i>
          </div>
          {/* Contact Details */}
          <div className="col">
            <p className="mb-0">info@soundart.com</p>
          </div>
        </div>
      
        <div className="row align-items-center mb-4">
          {/* Phone Icon */}
          <div className="col-auto">
            <i className="bi bi-telephone-fill" style={{ fontSize: "30px" }}></i>
          </div>
          {/* Contact Details */}
          <div className="col">
            <p className="mb-0">Contact Us</p>
            <p className="mb-0">(356) 1234 1234</p>
          </div>
        </div>
      
        <div className="row align-items-start">
          {/* Location Icon */}
          <div className="col-auto">
            <i className="bi bi-geo-alt-fill" style={{ fontSize: "30px" }}></i>
          </div>
          {/* Contact Details */}
          <div className="col">
            <p className="mb-0">SoundArt Ltd.</p>
            <p className="mb-0">112, Roy Buildings,</p>
            <p className="mb-0">JC Roads,</p>
            <p className="mb-0">RY</p>
          </div>
        </div>
      </div>    

    );
  }