import NoteCard from "./NoteCard.js";
import { useState } from "react";
function NotesArea() {
  const [notes, setNotes] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState({});
  console.log(notes);

  const submitHandler = (e) => {
    e.preventDefault();
    if (editMode) {
      const editableNoteIndex = notes.findIndex(
        (note) => note.id === editableNote.id
      );
      const newNotes = [...notes];
      newNotes.splice(editableNoteIndex, 1, {
        id: editableNote.id,
        task: task,
        description:description,
      });
      setNotes(newNotes);
      setEditMode(false);
    } else {
      setNotes([
        ...notes,
        { task: task, description: description, id: notes.length + 1 },
      ]);
    }
    setTask("");
    setDescription("");
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const updateNote = (id) => {
    const note = notes.find((note) => note.id === id);
    setEditableNote(note);
    setTask(note.task);
    setDescription(note.description);
    setEditMode(true);
  };
  return (
    <div className="notes_area">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task.."
        />
        <textarea
          name="describe"
          cols="30"
          rows="3"
          placeholder="Describe.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      <div className="notes_container">
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            id={note.id}
            task={note.task}
            description={note.description}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        ))}
      </div>
    </div>
  );
}
export default NotesArea;
