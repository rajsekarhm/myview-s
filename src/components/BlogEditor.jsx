import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function BlogEditor({ initialValue, onSave }) {
  console.log("onSave",onSave)
  const editorRef = useRef(null);

  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log('content',content)
      // onSave(content);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Editor
        apiKey="imh4mdpfx8w2tos9ocbvm51c0ck82kvmx9kb5nd5xxbtfu0k"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={initialValue}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | image media | code',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Save Post
      </button>
    </div>
  );
}