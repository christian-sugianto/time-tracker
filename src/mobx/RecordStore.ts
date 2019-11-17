import { observable } from "mobx";

export class RecordType {
  desc: String = "";
  startTime: Date = new Date();
  endTime: Date = new Date();
}

class RecordStore {
  @observable
  private _record: RecordType = new RecordType();

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

  public set records(value: Array<RecordType>) {
    this._records = value;
  }
}

export const recordStore = new RecordStore();