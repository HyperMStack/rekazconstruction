import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { ContactButton } from "./contact/ContactButton";
import { ContactIconButton } from "./contact/ContactIconButton";
import { ContactField } from "./contact/ContactField";

export function Contact() {
  return (
    <div className="relative">
      <img
        src="/images/contact.jpg"
        alt="rekaz-contact"
        className="h-screen w-screen object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="flex absolute top-1/2 md:top-1/4 left-0 md:left-1/3 mx-[5%] md:translate-y-[-12.5%]">
        <div className="bg-white text-gray-700 rounded-lg m-4 md:m-16 lg:10 p-5 md:p-5 lg:p-12">
          <div className="p-4">
            <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-20">
              <div>
                <b className="text-4xl">Contact Us</b>
                <p className="mt-3 lg:mt-5 text-gray-500">
                  Fill up the form to contact us
                </p>
                <div className="py-5 md:py-8 lg:py-10">
                  <div className="flex flex-col pl-0 gap-3 items-start">
                    <ContactButton
                      text={"+91-988888888"}
                      icon={<MdPhone color="black" size="20px" />}
                      link={"tel:+91-988888888"}
                    />
                    <ContactButton
                      text={"info@mail.com"}
                      icon={<MdEmail color="black" size="20px" />}
                      link={"mailto:info@mail.com"}
                    />
                    <ContactButton
                      text={"Karnavati, India"}
                      icon={<MdLocationOn color="black" size="20px" />}
                      link={"#"}
                    />
                  </div>
                </div>
                <div className="flex mt-10 gap-5 px-5 items-start">
                  <ContactIconButton
                    label={"facebook"}
                    icon={<MdFacebook size="28px" />}
                  />
                  <ContactIconButton
                    label={"github"}
                    icon={<BsGithub size="28px" />}
                  />
                  <ContactIconButton
                    label={"discord"}
                    icon={<BsDiscord size="28px" />}
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <div className="m-8 text-[#0B0E3F]">
                  <div className="flex flex-col gap-5">
                    <ContactField
                      id={"name"}
                      label={"Name"}
                      icon={<BsPerson />}
                      placeholder={"Your Name"}
                    />
                    <ContactField
                      id={"phone"}
                      label={"Phone Number"}
                      icon={<MdOutlinePhone />}
                      placeholder={"Your Phone Number"}
                    />
                    <ContactField
                      id={"email"}
                      label={"Email"}
                      icon={<MdOutlineEmail />}
                      placeholder={"Your Email"}
                    />
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        className="box-border outline-2 outline-sky-600 border border-gray-300  rounded-md w-[120%] p-2"
                        placeholder="Message"
                        name="message"
                        id="message"
                      />
                    </div>
                    <div>
                      <button className="bg-gray-600 text-white px-5 py-2 rounded-none">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
