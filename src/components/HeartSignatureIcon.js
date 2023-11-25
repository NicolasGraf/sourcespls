const HeartSignatureIcon = () => {
  return (
    <svg
      width="61"
      height="57"
      viewBox="-10 -10 76 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="customGradient" x1="100%" y1="100%">
          <stop offset="10%" stop-color="rgba(238,193,106,0.8)">
            <animate
              attributeName="stop-color"
              values="rgba(238,193,106,0.8);rgba(235,90,90,0.8);rgba(120,93,226,0.8);rgba(38,247,247,0.8);rgba(238,193,106,0.8)"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="30%" stop-color="rgba(235,90,90,0.8)">
            <animate
              attributeName="stop-color"
              values="rgba(235,90,90,0.8);rgba(120,93,226,0.8);rgba(38,247,247,0.8);rgba(238,193,106,0.8);rgba(235,90,90,0.8)"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="60%" stop-color="rgba(120,93,226,0.8)">
            <animate
              attributeName="stop-color"
              values="rgba(120,93,226,0.8);rgba(38,247,247,0.8);rgba(238,193,106,0.8);rgba(235,90,90,0.8);rgba(120,93,226,0.8)"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="80%" stop-color="rgba(38,247,247,0.8)">
            <animate
              attributeName="stop-color"
              values="rgba(38,247,247,0.8);rgba(238,193,106,0.8);rgba(235,90,90,0.8);rgba(120,93,226,0.8);rgba(38,247,247,0.8)"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        d="M30.5 56.625L29.1816 55.7461C22.915 51.561 14.9858 46.8311 9.11324 39.8789C2.92428 32.5547 -0.0449581 25.0327 0.0312137 16.8809C0.123499 7.77832 7.42281 0.375 16.3027 0.375C23.3501 0.375 28.0361 4.47656 30.5 7.43701C32.9638 4.47656 37.6499 0.375 44.6972 0.375C53.5771 0.375 60.8764 7.77832 60.9687 16.8765C61.0507 25.0327 58.0815 32.5503 51.8867 39.8745C46.0141 46.8311 38.0849 51.561 31.8183 55.7461L30.5 56.625Z"
        fill="url(#customGradient)"
        stroke={"#ccc"}
        strokeWidth={"2"}
      />
    </svg>
  );
};
