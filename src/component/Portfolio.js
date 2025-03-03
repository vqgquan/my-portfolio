import React from "react";

const Portfolio = () => {
  return (
    <div className="container text-start mt-4">
      <p className="fs-2 fw-bold">University project and experience</p>
      <div>
        <p>MedVoice: An AI assistant for medical documentation</p>
        <ul>
          <li>Do data preprocessing and work on AI/ML tools</li>
          <li>
            Set up local server to test out speaker diarization models as well
            as Large Language Models using Ollama, LangChain, OpenAI models
          </li>
          <li>
            Connect to the front-end using APIs and prepare for back-end
            implementation
          </li>
        </ul>

        <p>
          <b>Technology:</b>
        </p>
        <p>
          Python, Jupyter, Ollama, LangChain, OpenAI, ChromaDB, PostgreSQL,
          Docker, Picovoice, WhisperX, Jira
        </p>
      </div>
      <div>
        <p>Moviz: A movie rating and recommendation website</p>
        <ul>
          <li>
            Design the UI for the website and building it using TailwindCss,
            HTML, Javascript, ReactJS,..
          </li>
          <li>Act as project manager to plan and ensure project progression</li>
        </ul>

        <p>
          <b>Technology:</b>
        </p>
        <p>HTML, TailwindCSS, ReactJS, Figma, Docker. Jira</p>
      </div>
    </div>
  );
};

export default Portfolio;
