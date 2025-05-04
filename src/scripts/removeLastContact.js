import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  try {
    const editedContacts = JSON.parse(contacts).slice(0, -1);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(editedContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Error removing last contact!', error);
  }
};

removeLastContact();
