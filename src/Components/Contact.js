import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="pt-12 bg-gray-300 z-40">
        <div className="flex flex-col items-center h-full justify-center px-4 md:px-0">
          <div className="flex flex-col md:flex-row rounded-lg w-full md:w-3/4 lg:w-10/12 md:mx-0">
            <div className="md:w-1/2 md:h-full flex items-center justify-center">
              <div className="w-full flex flex-col text-center rounded-lg p-6 md:p-10">
                <div className="w-full mx-auto mb-6 flex">
                  <div className="w-1/2">
                    <i className="text-5xl fas fa-location-dot"></i>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-bold">My Location</h4>
                    <p className="text-gray-600">Bharatpur, Chitwan, Nepal</p>
                  </div>
                </div>
                <div className="w-full mx-auto mb-6 flex">
                  <div className="w-1/2">
                    <i className="text-5xl fas fa-phone"></i>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-bold">Call Us</h4>
                    <p className="text-gray-600">+977 056 527237</p>
                  </div>
                </div>
                <div className="w-full mx-auto flex">
                  <div className="w-1/2">
                    <i className="text-5xl fas fa-envelope"></i>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-bold">Email Us</h4>
                    <p className="text-gray-600">info@gcs.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <div className="mb-4">
                  <h6 className="text-gray-600 uppercase font-bold mb-2">Need Help?</h6>
                  <h1 className="text-4xl font-bold">Send Me A Message</h1>
                </div>
                <div className="w-full mt-4">
                  <form className="form-horizontal mx-auto" method="POST" action="">
                    <div className="mb-6">
                      <input type="text" className="w-full shadow-md border-1 border-gray-400 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-white-100" placeholder="Your Name" name="name" required="required" />
                    </div>
                    <div className="mb-6">
                      <input type="email" className="w-full shadow-md border-1 border-gray-400 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500" placeholder="Your Email" name="email" required="required" />
                    </div>
                    <div className="mb-6">
                      <textarea className="w-full shadow-md border-1 border-gray-400 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500" rows="5" placeholder="Message" name="message" required="required"></textarea>
                    </div>
                    <div className="w-full text-center">
                      <input type="submit" name="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
