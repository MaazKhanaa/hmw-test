import { useState } from "react";

export default function Editor() {


  const [text, setText] = useState('');
  const [pastedImages, setPastedImages] = useState([]);

  const handlePaste = (event) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;

    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        const blob = item.getAsFile();
        const reader = new FileReader();

        reader.onload = (e) => {
          setPastedImages((prevImages) => [...prevImages, e.target.result]);
        };

        reader.readAsDataURL(blob);
      }
    }
  };

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPaste={handlePaste}
      />
      <div>
        {pastedImages.map((image, index) => (
          <img key={index} src={image} width={200} alt={`Pasted Image ${index + 1}`} />
        ))}
      </div>
    </>
  )
}
