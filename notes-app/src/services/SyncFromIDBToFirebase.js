import { db, collection, addDoc, updateDoc, doc} from '../FirebaseConfig';

const notesCollectionRef = collection(db, 'notes');

export const SyncNotesWithAPI = async (notes) => {
    if (!Array.isArray(notes)) {
        console.error('Expected notes to be an array but got:', notes);
        throw new Error('Notes data structure is incorrect.');
    }

    try {
       
        for (const note of notes) {
            if (note.id) {
                const noteDoc = doc(db, 'notes', note.id);
                await updateDoc(noteDoc, note);
            } else {
                await addDoc(notesCollectionRef, note);
            }
        }
        return notes;
    } catch (error) {
        console.error('Error syncing with Firebase:', error);
        throw error;
    }
};
