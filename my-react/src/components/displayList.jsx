import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { useMyContext } from '../context/taskContext';
import EditableCard from './newCrad';

const DisplayList = () => {
    const { value, setValue } = useMyContext();

    const handleUpdate = (updatedItem) => {
        setValue((prevData) =>
            prevData.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    };

    const addTask = () => {
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            name: "Add task here",
            description: "Add content here",
            deadline: "10 days"
        }

        setValue([...value, newTask])
    }
    return (
        <>
            <Button variant="contained" onClick={addTask} sx={{marginTop: 2, backgroundColor: 'black', borderRadius: 5}}>Create New task</Button>
            <Container >
                <Grid container columns={10}>
                    {value.map((item) => (
                        <EditableCard key={item.id} item={item} onUpdate={handleUpdate} />
                    ))}
                </Grid>
            </Container >

        </>
    );
};

export default DisplayList;
