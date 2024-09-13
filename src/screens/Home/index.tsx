import CompetitionModal from "@components/modal/competition-modal";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Character from "./components/Character";
import Features from "./components/Features";
import Introduction from "./components/Introduction";
import Roadmap from "./components/Roadmap";
import TokenUtility from "./components/TokenUtility";
import Video from "./components/Video";
export function HomeScreens() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("hasSeenPopup", "true");
  };

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setShow(true);
    }
  }, []);
  return (
    <>
      <Banner />
      <Introduction />
      <Character />
      <Features />
      <TokenUtility />
      <Video />
      <Roadmap />
      <CompetitionModal open={show} onClose={handleClose} />
    </>
  );
}
