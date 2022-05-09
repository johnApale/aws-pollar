import React, { useContext, useEffect } from "react";
import ReactSwitch from "react-switch";
import { AnonymousContext } from "./anonymous-context";

function AnonymousToggleButton() {
  const { anonymous, setAnonymous } = useContext(AnonymousContext);

  useEffect(() => {
    const anonMode = window.localStorage.getItem("ANON_MODE");
    if (anonMode !== null) setAnonymous(JSON.parse(anonMode));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ANON_MODE", anonymous);
  }, [anonymous]);

  const toggleAnonymous = () => {
    setAnonymous((curr) => (curr === true ? false : true));
  };
  return (
    <ReactSwitch onChange={toggleAnonymous} checked={anonymous === true} />
  );
}

export default AnonymousToggleButton;
