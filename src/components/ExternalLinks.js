import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

const ExternalLinks = ({ githubLink, openLink, githubLabel = "GitHub", openLabel = "Live demo" }) => {
  return (
    <span className="external-links">
      <a className="github-icon" href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={githubLabel} title={githubLabel}>
        <GitHubIcon
          style={{
            fontSize: 20,
            color: "var(--lightest-slate)"
          }}
        />
      </a>
      {openLink && (
        <a className="open-icon" href={openLink} target="_blank" rel="noopener noreferrer" aria-label={openLabel} title={openLabel}>
          <OpenInBrowserIcon
            style={{
              fontSize: 25,
              color: "var(--lightest-slate)"
            }}
          />
        </a>
      )}
    </span>
  );
}

export default ExternalLinks;
