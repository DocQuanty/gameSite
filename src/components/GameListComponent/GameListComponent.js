import React from "react";
import s from "./GameListComponent.scss";
import CardComponent from "../CardComponent/CardComponent";

class GameListComponent extends React.Component {
  state = {
    Card: [
      {
        id: 1,
        img: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
        describe: "Bullet Collect 3D",
        btnInfo: "App Store",
      },
    ],
  };
  render() {
    this.state.Card.map((el, i) => {
      <CardComponent
        key={i}
        img={el.img}
        describe={el.describe}
        btnInfo={el.btnInfo}
      />;
    });

    return <div className="list-game"></div>;
  }
}
export default GameListComponent;
