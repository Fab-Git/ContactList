import "./styles.css";
import Contact from "./Contact";
import { ContactData } from "./ContactData";

export default function App() {
  const allContacts = ContactData.map((contact) => (
    <Contact
      key={contact.id}
      url={contact.url}
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
    />
  ));
  return <div className="App">{allContacts}</div>;
}
