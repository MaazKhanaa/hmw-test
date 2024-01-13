import { marked } from "marked";
import { useState } from "react";

export default function Preview() {
  const [isEditing, setIsEditing] = useState(true);
  const [markdownContent, setMarkdownContent] = useState('');

  const handleToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    setMarkdownContent(event.target.value);
  };


  return (
    <div>
      <button onClick={handleToggle} style={{background:"rgb(205,205,205)", color:"#000"}}>
        {isEditing ? 'Switch to Preview' : 'Switch to Editing'}
      </button>
      {isEditing ? (
        <textarea
          placeholder="Start typing..."
          value={markdownContent}
          onChange={handleInputChange}
        />
      ) : (
        <div>
          <p>Preview:</p>
          <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }}></div>
        </div>
      )}
    </div>
  )
}
