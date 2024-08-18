import axios from "axios";

const FIREBASE_URL = "https://notes-94420-default-rtdb.asia-southeast1.firebasedatabase.app/";

//**** POST API */
export const addNotesTOFireBase = async(notes) => {
    try{
        const response = await axios.post(
            `${FIREBASE_URL}/notes/mynotes.json`,
            notes
        );
        // console.log('Notes Added to Firebase: ',response);
        return response.data; //Firebase generates a unique ID as name
    }catch(error){
        console.error("Error While Adding Notes to firebase: ",error);
    }
}

//*** PUT API  */

export const updateNotesInFirebase = async(userId,notesId,updatedNote) => {
    try{
        await axios.put(
            `${FIREBASE_URL}/notes/mynotes/${userId}/notes/${notesId}.json`,
            updatedNote
        );
        console.log('Notes updated in firebase successfully');
    }catch(error){
        console.error('Error while Updating notes: ',error);
    }
};


//*** DELETE API */
export const deleteNoteFromFirebase = async (firebaseId) => {
    try {
        await axios.delete(
            `${FIREBASE_URL}/notes/mynotes/${firebaseId}.json`
        );
        console.log('Notes deleted from firebase');
    } catch (error) {
        console.error('Error while deleting notes in firebase:', error);
    }
};

//*** GET API */
export const getNotesFromFirebase = async() => {
    try {
        const response = await axios.get(
            `https://notes-94420-default-rtdb.asia-southeast1.firebasedatabase.app/notes/mynotes.json`
        );
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error while retrieving notes from firebase :', error);
    }
};
