import { RecommandedTour } from "./RecommandedTour";

export const RecommandedTours = ({ blok }: any) => {
    return (
        <section className="py-16 container mx-auto w-full px-4">
            <p className="text-3xl md:text-4xl font-bold text-center">{blok.headline}</p>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                {blok.tours.map((tour: any) => (
                    <RecommandedTour story={tour} key={tour.content._uid} />
                ))}
            </div>
        </section>)
}