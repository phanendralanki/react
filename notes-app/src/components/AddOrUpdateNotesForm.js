import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddOrUpdateNotesForm = ({ handleSaveNote, noteBeingEdited, clearEditing }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteBeingEdited) {
      setTitle(noteBeingEdited.title);
      setContent(noteBeingEdited.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [noteBeingEdited]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveNote({
      title,
      content,
      firebaseId: noteBeingEdited ? noteBeingEdited.firebaseId : undefined,
    });
    setTitle('');
    setContent('');
    clearEditing();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      p={2}
    >
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {noteBeingEdited ? 'Update Note' : 'Add Note'}
        </Button>
      </form>
    </Box>
  );
};

export default AddOrUpdateNotesForm;
