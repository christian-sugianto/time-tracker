import { RecordType } from "../mobx/RecordStore";

export const mapRecord = (id, desc, startTime) => {
  let record = new RecordType();
  record.id = id;
  record.desc = desc;
  record.startTime = new Date(startTime);
  record.endTime = new Date();
  return record;
}