import { useState, useEffect } from "react";
import axios from "axios";
import useHooks from "../hooks/useHooks";
import styles from "../styles/Contact.module.css";

const initialState = {
  name: "",
  email: "",
  subject: "",
  content: "",
};

const Contact = () => {
  const [{ name, email, subject, content }, setFormData] =
    useState(initialState);
  const { session } = useHooks();

  const handleChange = (e) => {
    const input = e.target;
    setFormData((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      email: session?.user.email,
    }));
  }, [session]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Get in Touch</h1>
      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        className={styles.form}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          className={styles.textField}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="name"
          value={name}
          required
        />
        <input
          className={styles.textField}
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
          value={email}
          required
        />
        <input
          className={styles.textField}
          type="text"
          name="subject"
          onChange={handleChange}
          placeholder="subject"
          value={subject}
        />
        <textarea
          className={styles.textField}
          name="content"
          onChange={handleChange}
          placeholder="message"
          value={content}
        />
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
