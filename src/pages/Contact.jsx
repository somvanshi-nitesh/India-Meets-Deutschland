export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form action="https://formsubmit.co/YOUR@EMAIL.COM" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <p>
          <label>Your Name:<br />
          <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>Your Email:<br />
          <input type="email" name="email" required /></label>
        </p>
        <p>
          <label>Your Message:<br />
          <textarea name="message" rows="4" required></textarea></label>
        </p>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
