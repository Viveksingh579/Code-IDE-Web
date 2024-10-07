import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Datacontext } from "../context/Dataprovider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(Datacontext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        colour="#FF3C41"
        value={html}
        onChange={setHtml} // Corrected the prop name to onChange
      />
      <Editor
        heading="CSS"
        icon="*"
        colour="#0EBEFF"
        value={css}
        onChange={setCss} // Corrected the prop name to onChange
      />
      <Editor
        heading="JS"
        icon="()"
        colour="#FCD000"
        value={js}
        onChange={setJs} // Corrected the prop name to onChange
      />
    </Container>
  );
};

export default Code;
