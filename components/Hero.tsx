import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <>
            {/* Hero */}
            <div>
                <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
                    {/* Announcement Banner */}
                    <div className="flex justify-center">
                        <a
                            className="inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition"
                            href="https://github.com/Francisekang24/interview-hub"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub Repository"
                        >
                            Build by Francisco Mofuman
                            <span className="bg-muted-foreground/15 inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold">
                                <svg
                                    className="h-4 w-4 flex-shrink-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    {/* End Announcement Banner */}
                    {/* Title */}
                    <div className="mx-auto mt-3 max-w-2xl text-center">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Get ready for your next interview
                        </h1>
                    </div>
                    {/* End Title */}
                    <div className="mx-auto mt-5 max-w-3xl text-center">
                        <p className="text-muted-foreground text-xl">
                            Interview Hub is a platform designed to help you prepare for your next interview 
                            with confidence. Explore a wide range of resources, including interview questions, 
                            tips, and practice sessions tailored to various industries and roles.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="mt-8 flex justify-center gap-3">
                        <Button size={"lg"}>
                            <Link
                                href="/interview-prep"
                                className="flex items-center gap-2"
                            >
                                Get Started
                                <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
                            </Link>
                        </Button>
                        <Button size={"lg"} variant={"outline"}>
                            Learn more
                        </Button>
                    </div>
                    {/* End Buttons */}
                    {/* <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
                        <span className="text-muted-foreground text-sm">
                            Package Manager:
                        </span>
                        <span className="text-sm font-bold">npm </span>
                        <svg
                            className="text-muted-foreground h-5 w-5"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 13L10 3"
                                stroke="currentColor"
                                strokeLinecap="round"
                            />
                        </svg>
                        <a
                            className="inline-flex items-center gap-x-1 text-sm font-medium decoration-2 hover:underline"
                            href="#"
                        >
                            Installation Guide
                            <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
                        </a>
                    </div> */}
                </div>
            </div>
            {/* End Hero */}
        </>
    );
}
