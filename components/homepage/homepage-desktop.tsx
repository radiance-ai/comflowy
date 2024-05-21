import { Templates } from "./tutorials";
import { HeroBlock } from "./hero";
import { Sections } from "./sections";

export function HomePageDesktop() {
  return (
    <div className="homepage-desktop">
      <HeroBlock />
      <Sections />
      <Templates />
    </div>
  )
}