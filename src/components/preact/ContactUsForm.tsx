import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

export interface IProps {
  btn_text?: string;
}
const ContactUsForm: FunctionalComponent<IProps> = (props) => {
  const [email, setEmail] = useState("");

  const handleOnSubmit = () => {};

  return (
    <section className="max-w-md mx-auto">
      <a
        href="mailto:saxenadhruv1927@gmail.com?cc=contact@kairoverse.com&subject=Kairoverse - Requirements: "
        onClick={handleOnSubmit}
        className="bg-slate-800 text-white rounded-lg p-2 cursor-pointer font-bold tracking-wider"
      >
        {props.btn_text ? props.btn_text : "CONTACT US"}
      </a>
    </section>
  );
};

export default ContactUsForm;
