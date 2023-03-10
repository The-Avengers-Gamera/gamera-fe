import styled from 'styled-components';
import TextEditor from '@/components/TextEditor';

const EditorWrapper = styled.div`
  height: 100%;
`;

const Editor = () => (
  <EditorWrapper>
    <TextEditor
      value=""
      placeholder="write something about..."
      onChange={() => 0}
    />
  </EditorWrapper>
);

export default Editor;
