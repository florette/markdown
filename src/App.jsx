import "normalize.css";
import "./App.css";
import initText from "./initText.js";
import { marked } from "marked";
import { useState, useEffect, useRef } from "React";

function App() {
    const [editorText, setEditorText] = useState(initText.text);

    const handleEditChange = (e) => {
        setEditorText(e.target.value);
    };

    const previewRef = useRef();

    useEffect(() => {
        previewRef.current.innerHTML = marked.parse(editorText);
    }, []);

    useEffect(() => {
        previewRef.current.innerHTML = marked.parse(editorText);
    }, [editorText]);

    return (
        <div className="app">
            <div className="column">
                <h2>Editor</h2>
                <textarea
                    id="editor"
                    value={editorText}
                    onChange={handleEditChange}
                />
            </div>
            <div className="column">
                <h2>Markdown Preview</h2>
                <div id="preview" ref={previewRef} />
            </div>
        </div>
    );
}

export default App;
