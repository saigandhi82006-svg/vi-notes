import React, { useState, useRef, useEffect } from 'react';
import './Editor.css';
const Editor: React.FC = () => {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize the textarea to fit content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const timestamp = Date.now();
    const key = e.key;
    console.debug(`[Vi-Notes] KeyDown: ${key} at ${timestamp}`);
  };

  return (
    <div className="editor-container">
      <textarea
        ref={textareaRef}
        className="editor-textarea"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Start writing..."
        spellCheck="false"
        autoFocus
      />
      <div className="editor-footer">
        <span className="word-count">
          {content.trim() ? content.trim().split(/\s+/).length : 0} words
        </span>
        <span className="char-count">
          {content.length} characters
        </span>
      </div>
    </div>
  );
};

export default Editor;
