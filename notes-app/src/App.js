import "./App.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addNotesTOFireBase,
  deleteNoteFromFirebase,
  getNotesFromFirebase,
  updateNotesInFirebase,
} from "./services/Firebase.API";
import {
  addNoteToDB,
  clearAllNotesFromDB,
  deleteNoteFromDB,
  getAllNotes,
  updateNoteInDB,
} from "./services/IndexedDB";
import AddOrUpdateNotesForm from "./components/AddOrUpdateNotesForm";
import NotesList from "./components/NotesList";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [noteBeingEdited, setNoteBeingEdited] = useState(null);

  useEffect(() => {
    const loadNotes = async () => {
      if (isOnline) {
        try {
          const firebaseNotes = await getNotesFromFirebase();
          const formattedNotes = Object.keys(firebaseNotes || {}).map((key) => ({
            ...firebaseNotes[key],
            firebaseId: key,
          }));
          setNotes(formattedNotes);
        } catch (error) {
          console.error("Failed to load notes from Firebase", error);
        }
      } else {
        try {
          const localNotes = await getAllNotes();
          setNotes(localNotes);
        } catch (error) {
          console.error("Failed to load notes from local storage", error);
        }
      }
    };
    loadNotes();
  }, [isOnline]);

  useEffect(() => {
    const handleOnline = async () => {
      setIsOnline(true);
      toast.success("You are back online! Syncing notes...");
      try {
        const localNotes = await getAllNotes();
        for (const note of localNotes) {
          await addNotesTOFireBase(note);
        }
        await clearAllNotesFromDB();

        const firebaseNotes = await getNotesFromFirebase();
        const formattedNotes = Object.keys(firebaseNotes || {}).map((key) => ({
          ...firebaseNotes[key],
          firebaseId: key,
        }));
        setNotes(formattedNotes);
      } catch (error) {
        console.error("Failed to sync notes:", error);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.warn("You are offline. Notes will be saved locally.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleAddOrUpdateNote = async (note) => {
    try {
      if (noteBeingEdited) {
        if (isOnline) {
          await updateNotesInFirebase(note);
        } else {
          await updateNoteInDB(note);
        }
        const updatedNotes = notes.map((n) => (n.firebaseId === note.firebaseId ? note : n));
        setNotes(updatedNotes);
      } else {
        if (isOnline) {
          await addNotesTOFireBase(note);
        } else {
          await addNoteToDB(note);
        }
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
      }
      setNoteBeingEdited(null);
    } catch (error) {
      console.error("Failed to save the note:", error);
    }
  };

  const handleEditNote = (note) => {
    setNoteBeingEdited(note);
  };

  const handleDeleteNote = async (firebaseId) => {
    try {
      const noteToDelete = notes.find((note) => note.firebaseId === firebaseId);
      if (isOnline && noteToDelete) {
        await deleteNoteFromFirebase(firebaseId);
      } else {
        await deleteNoteFromDB(firebaseId);
      }
      const updatedNotes = notes.filter((note) => note.firebaseId !== firebaseId);
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Failed to delete the note:", error);
    }
  };

  return (
    <>
      <Container>
        <AddOrUpdateNotesForm
          handleSaveNote={handleAddOrUpdateNote}
          noteBeingEdited={noteBeingEdited}
          clearEditing={() => setNoteBeingEdited(null)}
        />
        <NotesList
          notes={notes}
          deleteNote={handleDeleteNote}
          editNote={handleEditNote}
        />
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
