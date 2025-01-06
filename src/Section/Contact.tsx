import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

interface Props {
  setForm: (value: boolean) => void;
}

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validateForm = () => {
    if (form.current) {
      const formData = new FormData(form.current);
      const name = formData.get("name")?.toString().trim() || "";
      const email = formData.get("email")?.toString().trim() || "";
      const message = formData.get("message")?.toString().trim() || "";

      setIsFormValid(!!name && !!email && !!message && validateEmail(email));
    }
  };

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailValid(validateEmail(email));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSend(true);
    if (form.current && emailValid) {
      emailjs
        .sendForm("portfolio.Thomas.dev", "template_alj78vm", form.current, {
          publicKey: import.meta.env.VITE_MAIL_KEY,
        })
        .then(() => {
          console.log("SUCCESS!");
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
        });
    } else {
      alert(
        "Please fill out all required fields and enter a valid email address."
      );
    }
  };

  useEffect(() => {
    if (send) {
      setTimeout(() => {
        setSend(false);
      }, 10000);
    }
  }, [send]);

  return send ? (
    <div className="h-screen flex justify-center items-center flex-col gap-2">
      <p className="text-nowrap text-4xl animate-pulse">Email send!</p>
      <div className="h-2 w-52  ">
        <div className="h-full w-full bg-dark-background dark:bg-light-background rounded-full form-send-animation" />
      </div>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div className="mt-10 flex flex-col gap-1">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="opacity-75">
            You can get in touch with me through this form below.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} onChange={validateForm}>
          <div>
            <input
              required
              type="text"
              name="name"
              className="form__field"
              maxLength={50}
            />
            <label htmlFor="name" className="form__label a">
              Name
            </label>
          </div>
          <div>
            <input
              required
              type="text"
              onChange={handleEmailChange}
              name="email"
              className="form__field"
              maxLength={100}
            />
            <label
              htmlFor="email"
              className={emailValid ? "form__label a" : "form__label"}
            >
              Email
            </label>
          </div>
          <div>
            <textarea required name="message" className="form__field" />
            <label htmlFor="message" className="form__label a">
              Message
            </label>
          </div>
          <input
            type="submit"
            value="Send"
            disabled={!isFormValid}
            className={`w-1/2 bg-light-background dark:bg-dark-background text-black dark:text-white py-2 rounded-lg ${
              isFormValid
                ? "transition-colors cursor-pointer border border-dark-background/25 dark:border-light-background/25 hover:border-dark-background/10 dark:hover:border-light-background/10"
                : "opacity-50 cursor-not-allowed"
            }`}
          />
        </form>
      </div>
    </div>
  );
};
