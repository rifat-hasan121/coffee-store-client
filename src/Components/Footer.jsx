import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
    return (
      <>
        <div className="bg-[url(src/assets/images/more/13.jpg)]">
          <footer className="footer sm:footer-horizontal w-[1320px] mx-auto py-10 ">
            <aside>
              <img
                className="w-[85px] h-[100px]"
                src="src/assets/images/more/logo1.png"
                alt=""
              />
              <h3 className="text-4xl text-[#331A15] font-semibold">
                Espresso Emporium
              </h3>
              <p className="my-4">
                Always ready to be your friend. Come & Contact with us to share
                your <br /> memorable moments, to share with your best
                companion.
              </p>
              <div className="flex gap-4 mb-4">
                <Link
                  to="https://www.facebook.com/rabularafatpappu.pappu"
                  target="_blank"
                >
                  <FaFacebook size={38} style={{ color: "#331A15" }} />
                </Link>
                <Link to="https://x.com/rifathasan1211" target="_blank">
                  <FaTwitter size={38} style={{ color: "#331A15" }} />
                </Link>
                <Link
                  to="https://www.instagram.com/rifat_hasan_9999/"
                  target="_blank"
                >
                  <FaInstagram size={38} style={{ color: "#331A15" }} />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/md-rifat-hasan-46256b325/"
                  target="_blank"
                >
                  <FaLinkedin size={38} style={{ color: "#331A15" }} />
                </Link>
              </div>

              <h3 className="mb-4 text-3xl font-semibold">Get in Touch</h3>
              <div className="mb-4 flex gap-3">
                <MdCall size={26} style={{ color: "#331A15" }} />
                <p className="text-[18px]">+8801602944969</p>
              </div>
              <div className="mb-4 flex gap-3">
                <MdEmail size={26} style={{ color: "#331A15" }} />
                <p className="text-[18px]">+rifathasan@gmail.com</p>
              </div>
              <div className="mb-4 flex gap-3">
                <FaLocationDot size={26} style={{ color: "#331A15" }} />
                <p className="text-[18px]">72, Wall street, King Road, Dhaka</p>
              </div>
            </aside>
            <nav className="text-end mt-20">
              <h6 className="text-3xl ml-[390px] my-4 text-end font-semibold text-[#331A15]">
                Connect with Us
              </h6>
              <form>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input"
                  />
                  <input
                    className="textarea"
                    name="message"
                    placeholder="Message"
                  />
                </div>
                <input
                  className="text-start my-4 border-2 border-[#331A15] rounded-2xl py-2 px-3 hover:bg-[#331A15] hover:text-white cursor-pointer"
                  type="submit"
                  value={"Send Message"}
                />
              </form>
            </nav>
          </footer>
        </div>
        <div className="bg-[url(src/assets/images/more/24.jpg)] py-2 text-center">
          <h3 className="text-xl text-white">
            @Copyright Espresso Emporium ! All Rights Reserved
          </h3>
        </div>
      </>
    );
};

export default Footer;
