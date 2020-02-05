import { observable } from "mobx";

export class RecordType {
  desc: string = "";
  id: number = 0;
  startTime: Date = new Date();
  endTime: Date = new Date();
}

class RecordStore {
  @observable
  private _records: Array<RecordType> = [];

  public get records(): Array<RecordType> {
    return this._records;
  }

  public addRecord(value: RecordType) {
    this._records.unshift(value);
  }

  public deleteRecord(index: number) {
    this._records.splice(index, 1);
  }
}

export const recordStore = new RecordStore();