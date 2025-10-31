import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { Testinomial } from "./Testinomial";
import { RecommandedTours } from "./RecommandedTours";


storyblokInit({
    components: {
        tour: Tour,
        page: Page,
        hero: Hero,
        grid: Grid,
        feature: Feature,
        testinomial: Testinomial,
        recommanded_tour: RecommandedTours
    },
    enableFallbackComponent: true,
})

export const StoryblokProvider = ({children}:PropsWithChildren) => {
    return <>{children}</>;
}