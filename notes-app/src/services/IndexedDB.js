import { openDB } from 'idb';

const dbPromise = openDB('notes-db', 1, {
    upgrade(db) {
        db.createObjectStore('notes', {
            keyPath: 'id',
            autoIncrement: true,
        });
    },
});

export const getAllNotes = async () => (await dbPromise).getAll('notes');

export const addNoteToDB = async (note) => {
    console.log('Adding note to IndexedDB:', note);
    const id = await (await dbPromise).add('notes', note);
    console.log('Note added to IndexedDB with ID:', id);
    return id;
};

export const updateNoteInDB = async (note) => (await dbPromise).put('notes', note);

export const deleteNoteFromDB = async (id) => (await dbPromise).delete('notes', id);

export const clearAllNotesFromDB = async () => {
    const db = await dbPromise;
    const tx = db.transaction('notes', 'readwrite');
    await tx.objectStore('notes').clear();
    await tx.done;
};
