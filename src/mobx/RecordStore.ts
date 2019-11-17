import { observable } from "mobx";

type Record = {
  desc: String,
  startTime: Date,
  endTime: Date
}

class RecordStore {
  @observable
  private _records: Array<Record> = [];

  public get records(): Array<Record> {
    return this._records;
  }

  public set records(value: Array<Record>) {
    this._records = value;
  }
}

export const recordStore = new RecordStore();