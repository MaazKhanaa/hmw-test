import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadZone = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDroppedFiles = (acceptedFiles) => {
    setDroppedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDroppedFiles,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed black',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <input {...getInputProps()} />
      <p>Drag files here or click to select files</p>
      {droppedFiles.length > 0 && (
        <div>
          <p>Files dropped:</p>
          <ul>
            {droppedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadZone;
