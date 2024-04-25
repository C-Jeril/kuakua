/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Uibypa9CTvE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, Card, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col">
            <header className="relative">
                <img
                    alt="Cherry Blossoms"
                    className="w-full h-auto"
                    height="400"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "2048/400",
                        objectFit: "cover",
                    }}
                    width="2048"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex flex-col justify-center items-center">
                    <h1 className="text-white text-4xl font-bold mb-2">Discover Endless Praise</h1>
                    <p className="text-white max-w-md text-center">
                        Experience the joy of praising and being praised with our diverse collection of complimentary words and
                        phrases. Let positivity radiate in your life.
                    </p>
                    <div className="flex space-x-3 mt-2">
                        <Button className="bg-white" variant="default">
                            中文
                        </Button>
                        <Button className="border-white text-white" variant="outline">
                            EN
                        </Button>
                        <Button className="border-white text-white" variant="outline">
                            ES
                        </Button>
                    </div>
                </div>
            </header>
            <section className="py-12 bg-red-100">
                <h2 className="text-center text-3xl font-semibold mb-8">Our Services</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <Card className="w-[350px] bg-white">
                        <CardContent>
                            <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
                            <p className="text-sm">
                                Our expert consultation service provides personalized guidance to enhance your relationships. With our
                                guidance, expressing admiration becomes effortless and genuine.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-red-500 text-white" variant="default">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="w-[350px] bg-white">
                        <CardContent>
                            <h3 className="text-xl font-semibold mb-2">Exclusive Writing Service</h3>
                            <p className="text-sm">
                                Experience our exclusive praise-writing service. Craft unique compliments for any occasion. Make your
                                praises memorable and impactful.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-red-500 text-white" variant="default">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="w-[350px] bg-white">
                        <CardContent>
                            <h3 className="text-xl font-semibold mb-2">Community Workshops</h3>
                            <p className="text-sm">
                                Join our community workshops to learn the art of positivity. Become a champion of praise in your
                                personal and professional life.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-red-500 text-white" variant="default">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section className="py-12">
                <h2 className="text-center text-3xl font-semibold mb-8">Key Features</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <Card className="w-[350px]">
                        <CardHeader className="p-0">
                            <img
                                alt="Man standing by the sea"
                                className="w-full h-auto"
                                height="200"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "350/200",
                                    objectFit: "cover",
                                }}
                                width="350"
                            />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold">Celebrity Endorsements</h3>
                            <p className="text-sm">
                                Discover how famous personalities use praise to motivate and encourage others. Get insights and
                                inspiration from influential figures across industries.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-red-500 text-white" variant="default">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="w-[350px]">
                        <CardHeader className="p-0">
                            <img
                                alt="Inspirational quote with sunset"
                                className="w-full h-auto"
                                height="200"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "350/200",
                                    objectFit: "cover",
                                }}
                                width="350"
                            />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold">Inspiring Quotes Selection</h3>
                            <p className="text-sm">
                                Explore a curated collection of empowering quotes to uplift your spirits and inspire positive change.
                                Let words of wisdom guide your journey to success.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-red-500 text-white" variant="default">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section className="py-12 bg-red-100">
                <h2 className="text-center text-3xl font-semibold mb-8">夸夸网</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <Card className="w-[350px] bg-white">
                        <CardContent>
                            <h3 className="text-xl font-semibold mb-2">积极的话语</h3>
                            <p className="text-sm">夸夸网收集了各种积极的词汇和句子，以激励和赞美。</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-red-500 text-white" variant="default">
                                阅读更多
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="w-[350px] bg-white">
                        <CardContent>
                            <h3 className="text-xl font-semibold mb-2">个人成长</h3>
                            <p className="text-sm">夸夸网提供了一系列个人成长的句子和词汇。</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-red-500 text-white" variant="default">
                                阅读更多
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section className="py-12">
                <h2 className="text-center text-3xl font-semibold mb-8">Experience the Power of Praise on 夸夸网</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-red-500">3.5x</p>
                        <p className="text-sm">Boost Confidence</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-red-500">50%</p>
                        <p className="text-sm">Increase Engagement</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-red-500">2x</p>
                        <p className="text-sm">Drive Sales</p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-red-100">
                <h2 className="text-center text-3xl font-semibold mb-8">Positive Words and Phrases</h2>
                <article className="max-w-2xl mx-auto space-y-4">
                    <div>
                        <h3 className="font-semibold">1. What kind of words can I find on 夸夸网?</h3>
                        <p className="text-sm">
                            夸夸网 offers a diverse collection of words, expressions of praise, famous quotes, and inspirational
                            idioms that celebrate the power of positivity and encouragement.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">2. How can positive language impact our daily interactions?</h3>
                        <p className="text-sm">
                            By incorporating positive language into our conversations and thoughts, we can transform moments and build
                            bridges between individuals. The power to inspire is in our words.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">3. Can positive affirmations boost self-confidence?</h3>
                        <p className="text-sm">
                            Yes, positive affirmations significantly boost self-confidence and self-belief by realigning focus on
                            one’s abilities, values, and worth. Discover such words and mantras that empower and uplift living.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">4. Why choose 夸夸网 for Your Daily Dose of Positivity?</h3>
                        <p className="text-sm">
                            Embark with 夸夸网 on the uplifting journey of spreading warmth and positivity around you. Let’s fill the
                            world with our positive words and make each day brighter than the last.
                        </p>
                    </div>
                </article>
            </section>
            <footer className="bg-red-500">
                <div className="py-8 px-4">
                    <div className="flex flex-col items-center">
                        <div className="flex space-x-4 mb-4">
                            <FacebookIcon className="text-white h-6 w-6" />
                            <InstagramIcon className="text-white h-6 w-6" />
                            <TwitterIcon className="text-white h-6 w-6" />
                            <LinkedinIcon className="text-white h-6 w-6" />
                        </div>
                        <form className="flex space-x-2 mb-4">
                            <Input className="pl-2 pr-8 py-2" placeholder="Enter your email" type="email" />
                            <Button className="bg-white text-red-500" variant="default">
                                Subscribe
                            </Button>
                        </form>
                        <div className="flex justify-between w-full max-w-3xl text-white text-sm">
                            <div>
                                <h5 className="font-bold mb-1">COMPANY</h5>
                                <Link href="#">About</Link>
                                <Link href="#">Jobs</Link>
                                <Link href="#">For the Record</Link>
                            </div>
                            <div>
                                <h5 className="font-bold mb-1">COMMUNITIES</h5>
                                <Link href="#">For Artists</Link>
                                <Link href="#">Developers</Link>
                                <Link href="#">Brands</Link>
                            </div>
                            <div>
                                <h5 className="font-bold mb-1">RESOURCES</h5>
                                <Link href="#">Help Center</Link>
                                <Link href="#">Player</Link>
                                <Link href="#">Web Player</Link>
                            </div>
                            <div>
                                <h5 className="font-bold mb-1">USEFUL LINKS</h5>
                                <Link href="#">Support</Link>
                                <Link href="#">Web Player</Link>
                                <Link href="#">Free Mobile App</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-white text-sm mt-4">
                        <p>© 2023 夸夸网. All rights reserved by 夸夸网</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}