import { RecommandedTour } from '@/components/RecommandedTour';
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';
import { draftMode } from "next/headers";
import Image from "next/image";

const fetchToursPage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
  })
  return response.data.story;
}

const fetchAllTours = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
  })
  return response.data.stories;
}
export default async function Tours() {
  const story = await fetchToursPage()
  const tours = await fetchAllTours()

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour: any) => (
          <RecommandedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </div>
  );
}
