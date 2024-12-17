import { useEffect, useState } from "react";
import NoteDetails from "./components/NoteDetails";

const App = () => {
  const [sentence, setSentence] = useState(() => {
    const storedValue = localStorage.getItem("notes-taken");
    return storedValue !== null ? JSON.parse(storedValue) : [];
  });
  useEffect(() => {
    localStorage.setItem("notes-taken", JSON.stringify(sentence));
  }, [sentence]);

  const [input, setInput] = useState("");

  const pushText = () => {
    if (input) {
      const words = { id: Date.now(), text: input };
      setSentence([...sentence, words]);
      setInput("");
    };
  };

  const [noteTexts, setNoteTexts] = useState("");

  return (
    <>
      <div id="body">
        <div style={{ textAlign: 'center' }}>
          <h1 id="textTop">take a note</h1>
          <div id="textDiv">
            <label id="notLabel" htmlFor="add-note">Note:</label>
            <textarea name="" id="add-note" value={input} onChange={(e) => setInput(e.target.value)} rows="5" />
          </div>
          <button onClick={pushText} id="add-btn">Add Note</button>
        </div>
        <NoteDetails noteArray={sentence} setNoteArray={setSentence} setPresentNote={setNoteTexts} />
      </div>


      {noteTexts && <div id="det-div">
        <div id="noteDet">
          <button onClick={() => setNoteTexts("")} id="back-btn">&times;</button>
          <p id="note-det">{noteTexts}</p>
        </div>
      </div>}
    </>
  );
};

export default App;