import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      // be in maniye ke karbar alan aya dakhele modale? age are sharte badi ineke unjayike click karde dakhele modale?
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);
    // bad az mount bayad clean up beshe chon eventlistener ha sideEffect daran
    return () =>
      document.removeEventListener("click", handler, listenCapturing);
  }, [handler, listenCapturing]);
  return ref;
}
