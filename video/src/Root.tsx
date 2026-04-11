import React from "react";
import { Composition } from "remotion";
import { ClientFlowVideo } from "./Video";
import { SystemSummaryVideo } from "./SystemSummaryVideo";
import { ForexSupplyDemandVideo } from "./ForexSupplyDemandVideo";
import { FPS, DURATION_FRAMES } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ClientFlowVideo"
        component={ClientFlowVideo}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="SystemSummary"
        component={SystemSummaryVideo}
        durationInFrames={1680}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="ForexSupplyDemand"
        component={ForexSupplyDemandVideo}
        durationInFrames={1920}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
