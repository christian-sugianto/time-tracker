import React, { Component } from "react";
import Record from "./Record";
import { recordStore } from "../../../mobx/RecordStore";
import { computed, decorate } from "mobx";
import { observer } from "mobx-react"

const History = observer(class History extends Component {
  get records() {
    return recordStore.records;
  };

  render() {
    console.log("is re-rendered");

    return (
      <div className="history">
        <div
          style={{ borderStyle: "none none solid none", borderWidth: "1px" }}
        >
          <h2 style={{ padding: "10px 10px" }}> History </h2>
        </div>

        <div className="scroll">
          {this.records.map(record =>
            <Record desc={record.desc} startTime={record.startTime} endTime={record.entTime} />)}
          {/* <Record
            desc="Studying Computer Systems"
            startTime={startTime}
            endTime={endTime}
          />
          <Record desc="Pooping" startTime={startTime} endTime={endTime} />
          <Record
            desc="Studying Computer Systems"
            startTime={startTime}
            endTime={endTime}
          />
          <Record desc="Pooping" startTime={startTime} endTime={endTime} />
          <Record
            desc="Studying Computer Systems"
            startTime={startTime}
            endTime={endTime}
          />
          <Record desc="Pooping" startTime={startTime} endTime={endTime} />
          <Record
            desc="Studying Computer Systems"
            startTime={startTime}
            endTime={endTime}
          />
          <Record desc="Pooping" startTime={startTime} endTime={endTime} />
          <Record
            desc="Studying Computer Systems"
            startTime={startTime}
            endTime={endTime}
          />
          <Record desc="Pooping" startTime={startTime} endTime={endTime} /> */}
        </div>
      </div>
    );
  }
})

decorate(History, {
  records: computed,
})

export default History;
