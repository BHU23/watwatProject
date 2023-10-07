import { EventTypesInterface } from "./IEventType";
import { StatusesInterface } from "./IStatus";
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
  EventID?: number | null ;
  ParentEvent?: EventsInterface | null;
  EventTypeID?: number;
  EventType?: EventTypesInterface;
  StatusID?: number;
  Status?: StatusesInterface;
  HostName?: string ;
}