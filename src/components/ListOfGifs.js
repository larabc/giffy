import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState(
    []
  ); /*  es lo mismo que declarar estas dos constantes const value = state[0] const updateValue = state[1] */

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  if (loading) return <i>Cargando 🌀</i>;
  /*no tiene dependencias asi que solo se ejecutará una vez al cargar la página*/

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif
          /* {...singleGif} para coger todas las propiedades del objeto*/
          id={id}
          key={id}
          title={title}
          url={url}
        />
      ))}
    </div>
  );
}
