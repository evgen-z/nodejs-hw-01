import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const newContact = Array.from({ length: 1 }, () => createFakeContact());
    await writeContacts(newContact);
  } catch (error) {
    console.error('Error adding contact!', error);
  }
};

addOneContact();
