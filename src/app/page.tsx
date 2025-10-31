import { getStoryblokApi, StoryblokStory} from '@storyblok/react/rsc';
import Image from "next/image";

const fetchHomePage = async () =>{    
    const client = getStoryblokApi();
    const response = await client.getStory(`home`,{
        version: process.env.NODE_ENV === "development" ? "draft" : "published",
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
