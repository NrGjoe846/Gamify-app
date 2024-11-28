import React from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  language?: string;
  theme?: string;
}

export function CodeEditor({ code, onChange, language = 'javascript', theme = 'vs-dark' }: CodeEditorProps) {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden border-2 border-gray-200">
      <Editor
        height="100%"
        defaultLanguage={language}
        defaultValue={code}
        theme={theme}
        onChange={(value) => onChange(value || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />
    </div>
  );
}