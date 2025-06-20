"use client"
import { useState, useId } from "react"

import DropFile from "@/components/DropFile"
import { CheckIcon, CalendarIcon, ClockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "@/components/ui/timeline"

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"


import {
	Button as AriaButton,
	DatePicker,
	Dialog,
	Group,
	Label as AriaLabel,
	Popover,
} from "react-aria-components"

import { Calendar } from "@/components/ui/calendar-rac"
import { DateInput, TimeField } from "@/components/ui/datefield-rac"


export default function NewItem() {

	const [TimeLineCompleted, setTimeLineCompleted] = useState(false)


	return (
		<Timeline defaultValue={3}>
			<TimelineItem
				key={1}
				step={1}
				className="group-data-[orientation=vertical]/timeline:ms-10"
			>
				<TimelineHeader>
					<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
					<TimelineTitle className="text-lg font-semibold">
						Add Job Description
					</TimelineTitle>
					<TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
						{TimeLineCompleted ? (
							<CheckIcon
								className="group-not-data-completed/timeline-item:hidden"
								size={16}
							/>
						) : (
							<span className="h-2 w-2 rounded-full bg-primary" />
						)}
					</TimelineIndicator>
				</TimelineHeader>
				<TimelineContent>
					<Tabs defaultValue="paste-job-description">
						<TabsList className="before:bg-border relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px">
							<TabsTrigger
								value="paste-job-description"
								className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
							>
								Paste Job Description
							</TabsTrigger>
							<TabsTrigger
								value="upload-job-description"
								className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
							>
								Upload Job Description
							</TabsTrigger>
						</TabsList>
						<TabsContent value="paste-job-description">
							<div className="*:not-first:mt-2">
								<Textarea className="min-h-40" placeholder="Paste job description" required />
							</div>
						</TabsContent>
						<TabsContent value="upload-job-description">
							<DropFile />
						</TabsContent>
						<div className="flex justify-end">
							<Button variant="outline"
								onClick={() => setTimeLineCompleted(true)}
								className="mt-2"
							>Next</Button>
						</div>
					</Tabs>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem
				key={2}
				step={2}
				className="group-data-[orientation=vertical]/timeline:ms-10"
			>
				<TimelineHeader>
					<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
					<TimelineTitle className="text-lg font-semibold">
						Add Resume
					</TimelineTitle>
					<TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
						{TimeLineCompleted ? (
							<CheckIcon
								className="group-not-data-completed/timeline-item:hidden"
								size={16}
							/>
						) : (
							<span className="h-2 w-2 rounded-full bg-primary" />
						)}
					</TimelineIndicator>
				</TimelineHeader>
				<TimelineContent>
					<Tabs defaultValue="paste-resume">
						<TabsList className="before:bg-border relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px">
							<TabsTrigger
								value="paste-resume"
								className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
							>
								Paste Resume
							</TabsTrigger>
							<TabsTrigger
								value="upload-resume"
								className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
							>
								Upload Resume
							</TabsTrigger>
						</TabsList>
						<TabsContent value="paste-resume">
							<div className="*:not-first:mt-2">
								<Textarea className="min-h-40" placeholder="Paste job description" required />
							</div>
						</TabsContent>
						<TabsContent value="upload-resume">
							<DropFile />
						</TabsContent>
						<div className="flex justify-end">
							<Button variant="outline"
								onClick={() => setTimeLineCompleted(true)}
								className="mt-2"
							>Next</Button>
						</div>
					</Tabs>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem
				key={3}
				step={3}
				className="group-data-[orientation=vertical]/timeline:ms-10"
			>
				<TimelineHeader>
					<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
					<TimelineTitle className="text-lg font-semibold">
						Select Interview Date & Time
					</TimelineTitle>
					<TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
						{TimeLineCompleted ? (
							<CheckIcon
								className="group-not-data-completed/timeline-item:hidden"
								size={16}
							/>
						) : (
							<span className="h-2 w-2 rounded-full bg-primary" />
						)}
					</TimelineIndicator>
				</TimelineHeader>
				<TimelineContent>
					<div className="flex gap-4">
						<DatePicker className="*:not-first:mt-2">
							<AriaLabel className="text-foreground text-sm font-medium">Enter Date</AriaLabel>
							<div className="flex">
								<Group className="w-full">
									<DateInput className="pe-9" />
								</Group>
								<AriaButton className="text-muted-foreground/80 hover:text-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 z-10 -ms-9 -me-px flex w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none data-focus-visible:ring-[3px]">
									<CalendarIcon size={16} />
								</AriaButton>
							</div>
							<Popover
								className="bg-background text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border shadow-lg outline-hidden"
								offset={4}
							>
								<Dialog className="max-h-[inherit] overflow-auto p-2">
									<Calendar />
								</Dialog>
							</Popover>
							<p
								className="text-muted-foreground mt-2 text-xs"
								role="region"
								aria-live="polite"
							>
								Built with{" "}
								<a
									className="hover:text-foreground underline"
									href="https://react-spectrum.adobe.com/react-aria/DatePicker.html"
									target="_blank"
									rel="noopener nofollow"
								>
									React Aria
								</a>
							</p>
						</DatePicker>
						<TimeField className="*:not-first:mt-2">
							<AriaLabel className="text-foreground text-sm font-medium">
								Enter Time
							</AriaLabel>
							<div className="relative">
								<DateInput />
								<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 z-10 flex items-center justify-center pe-3">
									<ClockIcon size={16} aria-hidden="true" />
								</div>
							</div>
							<p
								className="text-muted-foreground mt-2 text-xs"
								role="region"
								aria-live="polite"
							>
								Built with{" "}
								<a
									className="hover:text-foreground underline"
									href="https://react-spectrum.adobe.com/react-aria/DateField.html"
									target="_blank"
									rel="noopener nofollow"
								>
									React Aria
								</a>
							</p>
						</TimeField>
					</div>
					<div className="flex justify-end">
						<Button variant="outline"
							onClick={() => setTimeLineCompleted(true)}
							className="mt-2"
						>Finish</Button>
					</div>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	)
}
