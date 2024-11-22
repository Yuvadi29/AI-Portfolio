import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
    {
        name: "Rohan Kokkula",
        username: "@rohankokkula",
        body: "Aditya is very proactive with his work. For my first podcast with him, he planned, executed and published the podcast in just 3 days. Quality questions. Quality content.",
        img: "https://media.licdn.com/dms/image/v2/D5603AQH2Tkzs1Seh-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730220833266?e=1737590400&v=beta&t=gphROLWZVIdzKs4RyeTlPTdyXBPP_GHKZiJamIUiRCE",
    },
    {
        name: "Rishabh Tripathi",
        username: "@rishabh--tripathi",
        body: "Your YouTube channel is truly impressive! The technical videos on Data Structures and Algorithms (DSA) are clear, concise, and incredibly helpful for students. I appreciate how you break down complex concepts into manageable, digestible pieces. The examples and explanations are practical and easy to follow, making learning much less intimidating. Your consistency in posting quality content shows your dedication to helping others grow. The balance of theoretical and practical insights is perfect. It’s evident you put a lot of thought and effort into making every video impactful. Keep up the amazing work; you’re making a real difference for students! Looking forward to more!",
        img: "https://media.licdn.com/dms/image/v2/D4D03AQHcXNQC4ypD5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730227750138?e=1737590400&v=beta&t=quK9iI2y4sPbxtdt_GCRuiPUCBA1A7ecihs3Txxup3M",
    },
    {
        name: "Siddhi Pawar",
        username: "@siddhi-pawar-6035292aa",
        body: "thank u, Coding adda and Aditya sir for being an incredible source of learning and inspiration. your episodes have taught me essential coding skills and fostered creativity and problem-solving. beyond technical knowledge ur insights on personal growth and resilience have profoundly shaped my perspective. grateful for the positive impact you've had on my journey!",
        img: "https://media.licdn.com/dms/image/v2/D4E03AQHIbYqEblN0Kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722779637036?e=1737590400&v=beta&t=dW2fOdOQ6IxldtkbFCke89iIyykKeQklDGs8k-tC4yU",
    },
];

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <div
            className={cn(
                "bg-white rounded-2xl shadow-md p-6 w-full transition-transform hover:scale-105 dark:bg-gray-800 dark:border dark:border-gray-700 h-fit"
            )}
        >
            <div className="flex items-center gap-4 ">
                <Image
                    className="h-16 w-16 rounded-full object-cover"
                    alt={`${name}'s avatar`}
                    src={img}
                    width={64}
                    height={64}
                />
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{body}</p>
        </div>
    );
};

export function Card() {
    return (
        <div className="container mx-auto py-16">
            <div className="grid gap-8 border border-yellow-500 ">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.username}
                        img={review.img}
                        name={review.name}
                        username={review.username}
                        body={review.body}
                    />
                ))}
            </div>
        </div>
    );
}
