import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditableCard = ({ item, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [deadline, setDeadline] = useState(item.deadline);
  const [description, setDescription] = useState(item.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };
 
  const handleSaveClick = () => {
    onUpdate({ ...item, name, description });
    console.log()
    setIsEditing(false);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  }

  return (
    <>
      <Box key={item.id} sx={{ paddingLeft: 10 , paddingBottom: 5}}>
        <Card sx={{ maxWidth: 300 , backgroundColor: 'ghostwhite' }}>
          <CardContent>
            {isEditing ? (
              <>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                 <TextField
                  fullWidth
                  margin="normal"
                  label="Deadline"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </>
            ) : (
              <>
                <Typography variant="h5" component="div" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                  {deadline}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {description}
                </Typography>
              </>
            )}
            {isEditing ? (
              <>
                <Button onClick={handleSaveClick} variant="contained" color="primary" >
                  Save
                </Button>
                <Button onClick={handleCancelClick} variant="contained" color="secondary" sx={{ marginLeft: 2 }}>
                  Cancel
                </Button>
              </>
            ) : (
              <IconButton onClick={handleEditClick}>
                <EditIcon />
              </IconButton>
            )}
          </CardContent>
        </Card>
      </Box>

    </>
  );

};

export default EditableCard;
