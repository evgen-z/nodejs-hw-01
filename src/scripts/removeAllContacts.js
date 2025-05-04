import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts), 'utf-8');
  } catch (error) {
    console.error('Error deleting contacts!', error);
  }
};

removeAllContacts();
