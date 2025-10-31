import { getStoryblokApi, StoryblokStory} from '@storyblok/react/rsc';
import React from 'react'
import { draftMode } from "next/headers";

type TourPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchTourPage = async (slug:string) =>{   
  const { isEnabled } = await draftMode(); 
    const client = getStoryblokApi();
    const response = await client.getStory(`tours/${slug}`,{
      version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
    })
    return response.data.story;
}

const TourPage = async ({ params, searchParams }: TourPageProps) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const story = await fetchTourPage(resolvedParams.slug)

  return (
   <StoryblokStory story = {story} />
  );
};

export default TourPage
