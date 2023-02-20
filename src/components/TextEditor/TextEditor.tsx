import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Editor = styled.div`
  .ql-toolbar {
    color: white;
    background-color: #212121;
    border: none;
  }
  .ql-container {
    background-color: #303442;
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .ql-editor {
    min-height: 400px;
    &.ql-blank::before {
      color: #696363;
      font-style: unset;
      left: 32px;
    }
  }
  .ql-snow {
    padding: 1.2rem;
    .ql-stroke {
      stroke: #fff;
    }
  }
`;

interface TextEditorProps {
  value: string;
  placeholder?: string;
  onChange(e: string): void;
}

const modules = {
  toolbar: [
    [
      'bold',
      'italic',
      'underline',
      'link',
      {
        list: 'bullet',
      },
      {
        list: 'ordered',
      },
    ],
  ],
};

const TextEditor = ({ value, placeholder = '', onChange }: TextEditorProps) => {
  return (
    <Editor>
      <ReactQuill
        theme="snow"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        modules={modules}
      />
    </Editor>
  );
};

export default TextEditor;
