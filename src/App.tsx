// eslint-disable-file

// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
// eslint-disable-next-line import/no-duplicates
import React from 'react';
import './App.css';

function DayOfTheWeek() {
  const [time, setTime] = useState<string>('');
  const [items, setItems] = useState<Array<any>>([]);
  const hi = <p>hi</p>;
  return (
    <>
      <p style={{ fontSize: '30px' }}>{time}</p>
      <>{items}</>
      {/* eslint-disable-next-line */}
      <button className="aaa" onClick={() => {
        const d = new Date();
        setTime(`${d.toLocaleDateString()} ${d.getHours()}:${d.getMinutes()
        }:${d.getSeconds()}:${d.getMilliseconds()}`);
      }}
      >
        get the tim
      </button>
      {/* eslint-disable-next-line */}
      <button className="aaa" onClick={() => {
        setItems((i) => [...i, hi]);
      }}
      >
        add a hi
      </button>
    </>
  );
}

function Calendar() {
  return (
    <div className="calendar">
      <DayOfTheWeek />
    </div>
  );
}

export default Calendar;
