import MenuCardNav from "./components/MenuCardNav";
import SteamHero from "./components/SteamHero";
import SlowStatement from "./components/SlowStatement";
import OriginArches from "./components/OriginArches";
import RoastDial from "./components/RoastDial";
import ThePour from "./components/ThePour";
import MenuBoard from "./components/MenuBoard";
import BakeShelf from "./components/BakeShelf";
import BeanBags from "./components/BeanBags";
import StayAWhile from "./components/StayAWhile";
import ClubAndNotes from "./components/ClubAndNotes";
import EmberFooter from "./components/EmberFooter";
import SiteFlags from "./components/SiteFlags";
import LatteLoader from "./components/LatteLoader";
import Transitions from "./components/Transitions";
import GhostCursor from "./components/GhostCursor";
import { faviconSvg } from "./components/Logo";
import { meta } from "./site";

const ICON = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

/** Ember Roast: a slow morning at the café, told through the coffee itself. Plan + Motion map: site/DESIGN.md. */
export default function Page() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={ICON} />
      <SiteFlags />
      <LatteLoader name={meta.loaderText ?? meta.name} />
      <Transitions />
      <GhostCursor />
      <MenuCardNav />
      <main className="relative overflow-x-clip">
        <SteamHero />
        <SlowStatement />
        <OriginArches />
        <RoastDial />
        <ThePour />
        <MenuBoard />
        <BakeShelf />
        <BeanBags />
        <StayAWhile />
        <ClubAndNotes />
      </main>
      <EmberFooter />
    </>
  );
}
