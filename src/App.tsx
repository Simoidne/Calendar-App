/* eslint-disable */

// eslint-disable-next-line import/no-duplicates
import { useState as BiGGBrain } from 'react';
// eslint-disable-next-line import/no-duplicates
import BIGBRAIN from 'react';
import './App.css';

const BigBrain = `AliceBlue
AntiqueWhite
Aqua
Aquamarine
Azure
Beige
Bisque
Black
BlanchedAlmon
Blue
BlueViolet
Brown
BurlyWood
CadetBlue
Chartreuse
Chocolate
Coral
CornflowerBlue
Cornsilk
Crimson
Cyan
DarkBlue
DarkCyan
DarkGoldenRod
DarkGray
DarkGreen
DarkKhaki
DarkMagenta
DarkOliveGreen
DarkOrange
DarkOrchid
DarkRed
DarkSalmon
DarkSeaGreen
DarkSlateBlue
DarkSlateGray
DarkTurquoise
DarkViolet
DeepPink
DeepSkyBlue
DimGray
DodgerBlue
FireBrick
FloralWhite
ForestGreen
Fuchsia
Gainsbor
GhostWhite
Gold
GoldenRod
Gray
Green
GreenYellow
HoneyDew
HotPink
IndianRed
Indigo
Ivory
Khaki
Lavender
LavenderBlush
LawnGreen
LemonChiffo
LightBlue
LightCoral
LightCyan
LightGoldenRodYellow
LightGray
LightGreen
LightPink
LightSalmon
LightSeaGreen
LightSkyBlue
LightSlateGray
LightSteelBlue
LightYellow
Lime
LimeGreen
Linen
Magenta
Maroon
MediumAquaMarine
MediumBlue
MediumOrchid
MediumPurple
MediumSeaGreen
MediumSlateBlue
MediumSpringGreen
MediumTurquoise
MediumVioletRed
MidnightBlue
MintCream
MistyRose
Moccasin
NavajoWhit
Navy
OldLace
Olive
OliveDrab
Orange
OrangeRed
Orchid
PaleGoldenRod
PaleGreen
PaleTurquois
PaleVioletRed
PapayaWhip
PeachPuff
Peru
Pink
Plum
PowderBlue
Purple
Red
RosyBrown
RoyalBlue
SaddleBrown
Salmon
SandyBrown
SeaGreen
SeaShell
Sienna
Silver
SkyBlue
SlateBlue
SlateGray
Sno
SpringGreen
SteelBlue
Tan
Teal
Thistle
Tomato
Turquoise
Violet
Wheat
White
WhiteSmoke
Yellow
YellowGreen
`.split('\n');

const getRNJesusColour = () => BigBrain[Math.floor(Math.random() * BigBrain.length)];

function DayOfTheWeek() {
  const [bbrainTime, changeTheBrain] = BiGGBrain<string>('');
  const [Brains, changeTheBrains] = BiGGBrain<Array<any>>([]);
  const [c, setFirstBrain] = BiGGBrain<string>(getRNJesusColour());
  const [d, setD] = BiGGBrain<string>(getRNJesusColour());
  const [isBrainChanged, makeBrainDifferentifNotCHanGED] = BiGGBrain<boolean>(true);

  const hi = <p className="hi" style={{ color: c }}>hi</p>;
  const HI = <p className="hi" style={{ color: d }}>HI</p>;
  return (
    <>
      <p style={{ fontSize: '30px' }}>{bbrainTime}</p>
      <>{Brains}</>
      <h1>
        {isBrainChanged ? 'yassss' : 'rip'}
        {(isBrainChanged !== false) ? 'hello' : 'hello'}
      </h1>
      {/* eslint-disable-next-line */}
      <button className="aaa" onClick={() => {
        const date = new Date();
        changeTheBrain(`${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()
        }:${date.getSeconds()}:${date.getMilliseconds()}`);
      }}
      >
        (=== and ===) ? get the tim : is not unable to !able
      </button>
      {/* eslint-disable-next-line */}
      <button className="aaa" onClick={() => {
        if (isBrainChanged) {
          setFirstBrain(getRNJesusColour());
          setD(getRNJesusColour());
        }
        changeTheBrains((i) => [...i, (Math.floor(Math.random() * 2) === 0 ? hi : HI)]);
      }}
      >
        add a hi
      </button>
      {/* eslint-disable-next-line */}
      <button className="aaa" onClick={() => {
        alert('hi'); // eslint-disable-line
      }}
      >
        alert a hi
      </button>
      {/* eslint-disable-next-line */}
      <button className="aaa" onClick={() => {
        setFirstBrain(getRNJesusColour());
        setD(getRNJesusColour());
        makeBrainDifferentifNotCHanGED((bol) => !bol);
      }}
      >
        change the colours AND change if colours change
      </button>
      {/* eslint-disable-next-line */}
      <button className="aaa" onClick={() => {
        document.getElementById('caendarl')!.style.backgroundColor = getRNJesusColour();
      }}
      >
        button click (&& no bug) ? change : background same or change can not
      </button>
    </>
  );
}

function Calendar() {
  return (
    <div className="calendar" id='caendarl'>
      <DayOfTheWeek />
    </div>
  );
}

export default Calendar;
