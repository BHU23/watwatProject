import { EventsInterface } from "./IEvent";
export interface HostsInterface {
  ID?: number;
  HostName?: string;
  EventID?: number;
  Event?: EventsInterface;
}

