import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function NotesList({ notes, deleteNote, editNote }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
      {notes.map((note) => (
        <Card key={note.firebaseId} style={{ width: '300px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {note.title}
            </Typography>
            <Typography variant="body2">
              {note.content}
            </Typography>
          </CardContent>
          <IconButton aria-label="edit" onClick={() => editNote(note)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => deleteNote(note.firebaseId)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </div>
  );
}

export default NotesList;
