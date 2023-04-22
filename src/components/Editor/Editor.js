/*eslint-disable*/
import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import * as monaco from "monaco-editor";

const Editor = () => {
  const editorRef = useRef(null);
  useEffect(() => {
    // Register the MIPS assembly language
    monaco.languages.register({ id: "mips" });
    monaco.languages.setMonarchTokensProvider("mips", {
      // Define the MIPS assembly syntax highlighting rules.
      tokenizer: {
        root: [
          // Register names.
          [/(\$[a-zA-Z0-9]+)/, "variable"],

          // Comments.
          [/;.*$/, "comment"],
          [/#.*$/, "comment"],

          // Labels.
          [/([a-zA-Z][a-zA-Z0-9]*:)/, "type.identifier"],

          // Directives.
          [/\.[a-zA-Z]+/, "keyword"],

          // Instructions.
          [/[a-zA-Z]+/, "string"],
        ],
      },
    });
  }, []);
  useEffect(() => {
    if (editorRef.current) {
      monaco.editor.create(editorRef.current, {
        value: "",
        language: "mips",
        theme: "vs-dark",
        automaticLayout: true,
      });
    }

    return () => {
      if (editorRef.current) {
        monaco.editor.getModels().forEach((model) => model.dispose());
      }
    };
  }, []);

  return <div ref={editorRef} style={{ width: "100%", height: "60vh" }} />;
};

export default Editor;
