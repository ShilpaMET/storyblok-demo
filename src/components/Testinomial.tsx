import { storyblokEditable } from "@storyblok/react/rsc";
export const Testinomial = ({ blok }: any) => {

    return (
        <div {...storyblokEditable(blok)} className="bg-white p-8 rounded-sm shadow">
            <p className="text-xl leading-relaxed text-gray-700">
                {blok.comment}
            </p>
            <p className="text-lg font-semibold mt-6">{blok.name}</p>
        </div>)
}