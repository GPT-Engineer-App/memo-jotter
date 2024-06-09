import React, { useState } from "react";
import { Container, VStack, HStack, Input, Textarea, Button, Box, Text, IconButton } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <IconButton aria-label="Add Note" icon={<FaPlus />} onClick={addNote} />
        </HStack>
        <Textarea placeholder="Take a note..." value={content} onChange={(e) => setContent(e.target.value)} />
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Text fontWeight="bold">{note.title}</Text>
                  <Text>{note.content}</Text>
                </VStack>
                <IconButton aria-label="Delete Note" icon={<FaTrash />} onClick={() => deleteNote(index)} />
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
