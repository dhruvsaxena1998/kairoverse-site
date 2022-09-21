import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

export interface IProps {
  btn_text?: string;
}
const ContactUsForm: FunctionalComponent<IProps> = (props) => {
  const [email, setEmail] = useState("");

  const handleOnSubmit = () => {};

  return (
    <section className="max-w-md flex gap-2 mx-auto">
      <input
        name="email"
        type="email"
        placeholder="e.g. johndoe@gmail.com"
        className="flex-1 rounded-lg bg-slate-200 p-2 box-border outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="button"
        onClick={handleOnSubmit}
        className="bg-slate-800 text-white rounded-lg p-2"
      >
        {props.btn_text ? props.btn_text : "Contact US"}
      </button>
    </section>
  );
};

export default ContactUsForm;
