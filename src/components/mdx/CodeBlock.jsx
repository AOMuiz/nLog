import { useRef, useState } from "react";
import { HiOutlineClipboardCheck, HiOutlineClipboard } from "react-icons/hi";

export default function CodeBlock({ children }) {
  const preRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  function copy() {
    setCopied(true);
    const content = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  }

  const onEnter = () => {
    setHovered(true);
  };

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  return (
    <div className="code-block" onMouseEnter={onEnter} onMouseLeave={onExit}>
      <pre ref={preRef}>{children}</pre>
      {!hovered && (
        <button
          onClick={copy}
          type="button"
          className="copy"
          aria-label="Copy code"
        >
          <span className="sr-only">Copy</span>
        </button>
      )}
      {hovered && (
        <button
          onClick={copy}
          type="button"
          className="copy"
          aria-label="Copy code"
        >
          <span className="copy-icon">
            {copied ? <HiOutlineClipboardCheck /> : <HiOutlineClipboard />}
          </span>
        </button>
      )}

      <style jsx>
        {`
          .code-block {
            position: relative;
          }
          pre {
            margin-top: 0;
          }
          .copy {
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 1rem;
            background: none;
            border-radius: 1rem;
            border: none;
            transition: transform 0.1s ease;
          }

          .sr-only {
            color: var(--default);
            font-size: 0.7rem;
          }
          .copy-icon {
            color: var(--primary-color);
            font-size: 1.5rem;
          }
          .copy:active {
            transform: scale(0.9);
          }
        `}
      </style>
    </div>
  );
}
