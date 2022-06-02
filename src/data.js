import { v4 as uuidv4 } from "uuid";

// Active: true = current selected song

function samantha() {
  return [
    {
        name: "song on the beach",
        cover:  "http://drive.google.com/uc?export=view&id=1E1C62SWFsIy6-T5Wzo9U0yJahirP9K-x",
        audio: "https://docs.google.com/uc?export=download&id=1jlqUdfbki-t0SVMQEZypeDlf-7wNTLc9",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: true,
    },
    {
        name: "photograph",
        cover: "http://drive.google.com/uc?export=view&id=1E1C62SWFsIy6-T5Wzo9U0yJahirP9K-x",
        audio: "https://docs.google.com/uc?export=download&id=1qITtcNJuZ8BvYi8TVZYTxwKQorKxqsSK",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "some other place",
        cover: "http://drive.google.com/uc?export=view&id=1E1C62SWFsIy6-T5Wzo9U0yJahirP9K-x",
        audio: "https://docs.google.com/uc?export=download&id=13TAtbGyYV63wYj6RpHBP9q7_uiGipl_-",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    }, 
    {
        name: "we all leaving",
        cover: "http://drive.google.com/uc?export=view&id=1E1C62SWFsIy6-T5Wzo9U0yJahirP9K-x",
        audio: "https://docs.google.com/uc?export=download&id=1hs548Rf64KtC2Tpg9ubgPEr3po1Et0h1",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    }
  ];
}

export default samantha;