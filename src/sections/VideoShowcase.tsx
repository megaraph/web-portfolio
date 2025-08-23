import video from "../../public/videos/portfolio.mp4";

export default function VideoShowcase() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Full-screen video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark filter overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
        </section>
    );
}
