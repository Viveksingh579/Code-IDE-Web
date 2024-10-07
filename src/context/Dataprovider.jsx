import { createContext, useState } from "react";
const Datacontext = createContext();

const Dataprovider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <Datacontext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </Datacontext.Provider>
  );
};

export { Datacontext };
export default Dataprovider;
