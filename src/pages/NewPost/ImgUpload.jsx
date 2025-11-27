import { GoPlus } from "react-icons/go";
import { useRef, useState } from "react";

export default function ImgUpload({ onSelect }) {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  function handleClick() {
    fileInputRef.current.click();
  }

  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setPreviewUrl(url);
    onSelect(file);
  }

  return (
    <div className="imgPost">
      <h2>Imagens</h2>

      <div className="addImg">
        <div className="buttonAddImg" onClick={handleClick}>
          <GoPlus className="iconAdd" />
        </div>

        {previewUrl && (
          <img
            src={previewUrl}
            alt="preview"
            className="preview-upload"
          />
        )}

        <input
          id="imageUploadInput" 
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
