import { RecordType } from "../mobx/RecordStore";

const uuid = require('uuid');

export const mapRecord = (desc, startTime) => {
  let record = new RecordType();
  record.id = uuid.v4();
  record.desc = desc;
  record.startTime = new Date(startTime);
  record.endTime = new Date();
  return record;
}