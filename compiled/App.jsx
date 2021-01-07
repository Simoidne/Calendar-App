"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
function DayOfTheWeek() {
    return (<p>Lorem Ipsom</p>);
}
function Calendar() {
    return (<div className="calendar">
      <DayOfTheWeek />
    </div>);
}
exports.default = Calendar;
