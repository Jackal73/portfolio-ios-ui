import WindowControls from "#components/WindowControls";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2 className="">Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/Tommy Kizaam (1).jpg"
          alt="Shawn"
          className="w-20 rounded-full"
        />

        <h3 className="">Let's Connect</h3>
        <p className="">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.{" "}
        </p>
        <p className="">contact@kbldesigners.com</p>

        <ul className="">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
