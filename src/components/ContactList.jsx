import { ContactElement } from "./ContactElement";

export const ContactList = ({ contacts, onDelete }) => {
    return (
    <div>
      
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactElement
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}  />
        ))}
      </ul>
    </div>
  );
};