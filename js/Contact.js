import { El } from '/js/deps.js';

function Contact(props, ...children) {
  const { name, image, location, email } = props;

  return (
    El.header({},
      El.img({ src: props.image, alt: "Headshot", className: "headshot" }),
      El.h1({ id: "name" }, props.name),
      El.p({ id: "contactInfo" }, props.location, " | ", El.a({ className: "email", href: `mailto:${props.email}`}, props.email))
    )
  );
}

export default Contact;