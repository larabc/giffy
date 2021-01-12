import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs"


export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]); /*  es lo mismo que declarar estas dos constantes const value = state[0] const updateValue = state[1] */

  useEffect(function () {
    getGifs({ keyword })
        .then((gifs) => setGifs(gifs));
  }, [keyword]); /*no tiene dependencias asi que solo se ejecutará una vez al cargar la página*/

  return gifs.map(({ id, title, url }) => (
    <Gif
      /* {...singleGif} para coger todas las propiedades del objeto*/
      id={id}
      key={id}
      title={title}
      url={url}
    />
  ));
}
