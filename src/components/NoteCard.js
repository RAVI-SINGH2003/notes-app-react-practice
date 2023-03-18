function NoteCard({ id, task, description, deleteNote, updateNote }) {
  return (
    <div className="note">
      <h1>{task}</h1>
      <p>{description}</p>
      <div className="button_div">
        <button onClick={() => deleteNote(id)}>🗑️</button>
        <button onClick={() => updateNote(id)}>✏️</button>
      </div>
    </div>
  );
}
export default NoteCard;
