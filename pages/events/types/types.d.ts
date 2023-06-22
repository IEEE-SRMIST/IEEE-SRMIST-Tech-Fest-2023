export interface Event {
  id?: string;
  name: string;
  date?: Date;
  location?: string;
  description: string;
  cover: string;
  type?: string;
  slug?: string;
}

interface eventProps {
  event: Event;
}
interface timelineProps {
  events: Event[];
}
