import { observable } from "mobx";

export class RecordType {
  desc: string = "";
  id: string = "";
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

  public deleteRecord(id: string) {
    // eslint-disable-next-line
    this._records.map(record => {
      if (record.id === id) {
        const index = this._records.indexOf(record);
        this._records.splice(index, 1);
      }
    })
  }
}

export const recordStore = new RecordStore();