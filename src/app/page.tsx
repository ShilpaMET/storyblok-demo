import { getStoryblokApi, StoryblokStory} from '@storyblok/react/rsc';
import Image from "next/image";
import { draftMode } from "next/headers";

const fetchHomePage = async () =>{   
     const { isEnabled } = await draftMode(); 
    const client = getStoryblokApi();
    const response = await client.getStory(`home`,{
        version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
        resolve_relations: "recommanded_tour.tours"
    })
    return response.data.story;
}

export default async function Home() {
   const story = await fetchHomePage()
  
    return (
     <StoryblokStory story = {story} />
    );
}
