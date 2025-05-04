import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return JSON.parse(contacts);
  } catch (error) {
    console.error('Error fetching contacts!', error);
  }
};

console.log(await getAllContacts());
