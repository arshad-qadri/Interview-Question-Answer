import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import jsData from "../assets/data/javascript.json";
import reactData from "../assets/data/react.json";
import nextData from "../assets/data/next.json";

const dataMap = {
  js: jsData,
  react: reactData,
  next: nextData,
};

const QAViewer = () => {
  const [selectedCategory, setSelectedCategory] = useState("js");

  const questions = dataMap[selectedCategory] || [];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded ">
      <h1 className="text-3xl font-bold mb-6">Interview Q&A</h1>

      <select
        className="mb-6 p-2 border rounded w-full md:w-1/3"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="js">JavaScript</option>
        <option value="react">React</option>
        <option value="next">Next.js</option>
      </select>

      <div className="space-y-6">
        {questions.map(({ id, question, answer, code }) => (
          <div
            key={id}
            className="p-4 border rounded shadow bg-gray-50 hover:bg-gray-100 transition"
          >
            <h2 className="font-semibold text-xl">
              {id}. {question}
            </h2>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{answer}</p>
            {code && (
              <SyntaxHighlighter
                language={selectedCategory === "js" ? "javascript" : "jsx"}
                style={oneDark}
                className="mt-4 rounded"
                wrapLines={true}
              >
                {code}
              </SyntaxHighlighter>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QAViewer;
