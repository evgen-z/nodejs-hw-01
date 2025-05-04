import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        return JSON.parse(contacts).length;
    }
    catch (error) {
        console.error("Error counting contacts!", error);
    }
};

console.log(await countContacts());
