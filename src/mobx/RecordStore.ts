import { observable } from "mobx";

export interface RecordType {
  desc: string;
  startTime: Date;
  endTime: Date;
}

class RecordStore {
  @observable
  private _record: RecordType = { desc: "", startTime: new Date(), endTime: new Date() };

  @observable
  private _records: Array<RecordType> = [];

  public get record(): RecordType {
    return this._record;
  }

  public set record(value: RecordType) {
    this._record = value;
  }

  public get records(): Array<RecordType> {
    return this._records;
  }

  public addRecord(value: RecordType) {
    this._records.push(value);
  }

  public deleteRecord(index: number) {
    this._records.splice(index, 1);
  }
}

export const recordStore = new RecordStore();