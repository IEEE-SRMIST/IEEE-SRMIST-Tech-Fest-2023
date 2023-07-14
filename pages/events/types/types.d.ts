export interface Event {
  id?: string;
  name: string;
  date?: Date | string;
  location?: string;
  speakers: any;
  judges: any; // todo : define tyles after discussion
  description: string;
  cover: string;
  type?: string;
  slug?: string;
  rules?: string[]; // Todo: make a type for rules
}
export interface eventProps {
  event: Event;
  index: number;
}
export interface timelineProps {
  events: Event[];
}
