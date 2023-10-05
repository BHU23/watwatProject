import { EventTypesInterface } from "./IEventType";

export interface EventsInterface {

  ID?: number;
  EventName?: string;
  DateBegin?: string;
  TimeOfBegin?: string;
  DateEnd?: string;
  TimeOfEnd?: string;
  OutPlace?: string;
  UserTel?: string;
  Description?: string | null;
  // EventID?: EventTypesInterface;
  EventTypeID?: number;
  EventType?: EventTypesInterface;
  // StatusID?: number | null;

}