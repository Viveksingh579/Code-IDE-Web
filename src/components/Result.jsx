
import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { Datacontext } from "../context/Dataprovider";

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useState('');
  const { html, css, js } = useContext(Datacontext);

  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode); // Update src with the correct HTML code
    }, 1000);

    return () => clearTimeout(timeout); // Cleanup on unmount or when dependencies change
  }, [html, css, js]);

  return (
    <Container>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
