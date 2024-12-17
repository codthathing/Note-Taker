const NoteDetails = ({ noteArray, setNoteArray, setPresentNote }) => {
  return (
    <div id="note-div">
      {noteArray.map(({ id, text }) => {
        return (
          <div key={id} className="don-div">
            <button type="button" onClick={() => setNoteArray(prevState => prevState.filter((note) => note.id !== id))} className="clear-btn">&times;</button>
            <div className="texts">{text}</div>
            <button type="button" onClick={() => setPresentNote(noteArray.find((note) => note.id === id).text)} className="read-btn"> Read Details </button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteDetails;