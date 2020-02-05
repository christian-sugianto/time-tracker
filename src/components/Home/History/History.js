import React, { Component } from "react";
import Record from "./Record";
import { recordStore } from "../../../mobx/RecordStore";
import { computed } from "mobx";

// components
class History extends Component {
  render() {
    const startTime = new Date(0, 0, 0, 10, 25, 0);
    const endTime = new Date(0, 0, 0, 11, 0, 0);

    return (
      <div className="history">
        <div
          style={{ borderStyle: "none none solid none", borderWidth: "1px" }}
        >
          <h2 style={{ padding: "10px 10px" }}> History </h2>
        </div>

        <div className="scroll">
          {recordStore._records.map(record =>
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
}

export default History;
