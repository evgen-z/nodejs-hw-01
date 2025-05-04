import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        await writeContacts(newContacts);
    }
    catch (error) {
        console.log("Error adding multiple contacts!", error);
    }
};

generateContacts(5);
