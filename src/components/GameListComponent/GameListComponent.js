import React from "react";
import "./GameListComponent.scss";
import CardComponent from "../CardComponent/CardComponent";

class GameListComponent extends React.Component {
  state = {
    Card: [
      {
        id: 1,
        img: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
        describe: "Bullet Collect 3D",
        btnInfo: "App Store",
        link: "https://www.apple.com/ua/app-store/",
      },
      {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCxuUXimum38SXh7lO3eVjXbrbxwzJ2TUvzBvKo4jGHX2zTS4hngmy3DFMTrkdshlevk&usqp=CAU",
        describe: "Steal N Run: Master Thief",
        btnInfo: "App Store",
        link: "https://www.apple.com/ua/app-store/",
      },
      {
        id: 3,
        img: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
        describe: "Bullet Collect 3D",
        btnInfo: "App Store",
        link: "https://www.apple.com/ua/app-store/",
      },
      {
        id: 4,
        img: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
        describe: "Pack it up! Jigsaw Puzzle Game",
        btnInfo: "App Store",
        link: "https://www.apple.com/ua/app-store/",
      },
      {
        id: 5,
        img: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
        describe: "Coloring Guys io: Run and Paint",
        btnInfo: "App Store",
        link: "https://www.apple.com/ua/app-store/",
      },
    ],
  };
  render() {
    const CardItem = this.state.Card.map((el, i) => {
      return (
        <CardComponent
          key={i}
          img={el.img}
          describe={el.describe}
          btnInfo={el.btnInfo}
          link={el.link}
        />
      );
    });

    return <div className="list-game">{CardItem}</div>;
  }
}
export default GameListComponent;
