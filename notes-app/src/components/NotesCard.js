import React from "react";
import { ListItem, ListItemText, Button } from "@mui/material";

const NotesCard = ({ note, onDelete, onEdit }) => {
  return (
    <ListItem>
      <ListItemText primary={note.title} secondary={note.content} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onEdit(note)}
        style={{ marginRight: 10 }}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onDelete(note.firebaseId)}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default NotesCard;
