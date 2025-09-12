export async function validWord(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        // This checks for network errors (like 404, 500, etc.)
        if (!response.ok) {
            return false;
        }

        const data = await response.json();

        if (Array.isArray(data)) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        // This catches errors if the fetch itself fails (e.g., user is offline)
        console.error("Error validating word:", error);
        return false; // Treat any error as an invalid word
    }
};