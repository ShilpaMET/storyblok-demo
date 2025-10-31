import { StoryblokComponent, storyblokEditable, } from "@storyblok/react";


export const Page = ({ blok }: any) => {
    if (!blok.body || blok.body.length === 0) {
        return <p>No content available</p>;
    }

    return (
        <main {...storyblokEditable(blok)}>
            {blok.body.map((blok: any) => {
                return <StoryblokComponent blok={blok} key={blok._uid}></StoryblokComponent>
            })}
        </main>)
}