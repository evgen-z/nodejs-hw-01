import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = updatedContacts;

  try {
    let existingContacts = [];

    try {
      const exData = await fs.readFile(PATH_DB, 'utf-8');
      existingContacts = JSON.parse(exData);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    const contactsToWrite = [...existingContacts, ...data];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contactsToWrite, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Error while writing to file!', error);
  }
};
