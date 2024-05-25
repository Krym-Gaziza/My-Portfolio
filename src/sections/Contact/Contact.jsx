import styles from './ContactStyles.module.css';
import withAuth from '../../hoc/withAuth';
import axios from 'axios';

async function handleSubmit(event) {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  if (!name) {
    alert("Please enter your name");
    return;
  }
  if (!email) {
    alert("Please enter your email");
    return;
  }
  if (!message) {
    alert("Please enter your message");
    return;
  }

  try {
    const response = await axios.post('https://getform.io/f/jbwxmlga', { name, email, message });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default withAuth(Contact);
