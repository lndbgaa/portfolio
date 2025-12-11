import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import "./AnimatedTerminal.css";

const ANIMATION_CONFIG = {
  TYPING_SPEED: { command: 80, output: 30 },
  LINE_DELAY: { command: 500, output: 200 },
  RESET_DELAY: 4000,
} as const;

const AnimatedTerminal = () => {
  const { t } = useTranslation();

  const reducedMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const terminalLines = useMemo(
    () => [
      { id: "pwd", type: "command", text: t("about.terminal.pwd") },
      { id: "path", type: "output", text: t("about.terminal.path") },
      { id: "whoami", type: "command", text: t("about.terminal.whoami") },
      { id: "name", type: "output", text: t("about.terminal.name") },
      { id: "echoStatus", type: "command", text: t("about.terminal.echoStatus") },
      { id: "status", type: "output", text: t("about.terminal.status") },
    ],
    [t]
  );

  const initialVisibleLines = useMemo(() => {
    return reducedMotion ? terminalLines.length : 0;
  }, [terminalLines.length, reducedMotion]);

  const [visibleLines, setVisibleLines] = useState<number>(initialVisibleLines);
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    setVisibleLines(initialVisibleLines);
  }, [initialVisibleLines]);

  useEffect(() => {
    if (reducedMotion) return;

    if (visibleLines >= terminalLines.length) {
      const resetTimer = setTimeout(() => {
        setVisibleLines(0);
        setCurrentText("");
      }, ANIMATION_CONFIG.RESET_DELAY);

      return () => clearTimeout(resetTimer);
    }

    const currentLine = terminalLines[visibleLines];

    if (!currentLine) return;

    const fullText = currentLine.text;

    if (currentText.length < fullText.length) {
      const typingSpeed = ANIMATION_CONFIG.TYPING_SPEED[currentLine.type as keyof typeof ANIMATION_CONFIG.TYPING_SPEED];

      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    const delay = ANIMATION_CONFIG.LINE_DELAY[currentLine.type as keyof typeof ANIMATION_CONFIG.LINE_DELAY];

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
      setCurrentText("");
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleLines, currentText, terminalLines, reducedMotion]);

  return (
    <div className="terminal">
      {terminalLines.map((line, index) =>
        index < visibleLines ? (
          <div key={line.id} className={`terminal-line terminal-${line.type}`}>
            {line.type === "command" && <span className="terminal-prompt">$</span>}
            <span>{line.text}</span>
          </div>
        ) : null
      )}

      {!reducedMotion && terminalLines[visibleLines] && (
        <div className={`terminal-line terminal-${terminalLines[visibleLines].type}`}>
          {terminalLines[visibleLines].type === "command" && <span className="terminal-prompt">$</span>}
          <span>{currentText}</span>
          <span className="terminal-cursor" aria-hidden="true">
            _
          </span>
        </div>
      )}
    </div>
  );
};

export default AnimatedTerminal;
