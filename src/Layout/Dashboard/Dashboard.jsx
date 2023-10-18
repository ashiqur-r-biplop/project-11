import { ResponsiveBump } from "@nivo/bump";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { ResponsiveLine } from "@nivo/line";
import { useState } from "react";
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [drawer, setDrawer] = useState(true);
  console.log(drawer);
  const ResponsiveBumpData = [
    {
      id: "Serie 1",
      data: [
        {
          x: 2000,
          y: 5,
        },
        {
          x: 2001,
          y: 2,
        },
        {
          x: 2002,
          y: 2,
        },
        {
          x: 2003,
          y: 2,
        },
        {
          x: 2004,
          y: 4,
        },
      ],
    },
    {
      id: "Serie 2",
      data: [
        {
          x: 2000,
          y: 3,
        },
        {
          x: 2001,
          y: 11,
        },
        {
          x: 2002,
          y: 1,
        },
        {
          x: 2003,
          y: 11,
        },
        {
          x: 2004,
          y: 7,
        },
      ],
    },
    {
      id: "Serie 3",
      data: [
        {
          x: 2000,
          y: 6,
        },
        {
          x: 2001,
          y: 4,
        },
        {
          x: 2002,
          y: 11,
        },
        {
          x: 2003,
          y: 5,
        },
        {
          x: 2004,
          y: 10,
        },
      ],
    },
    {
      id: "Serie 4",
      data: [
        {
          x: 2000,
          y: 7,
        },
        {
          x: 2001,
          y: 12,
        },
        {
          x: 2002,
          y: 7,
        },
        {
          x: 2003,
          y: 6,
        },
        {
          x: 2004,
          y: 5,
        },
      ],
    },
    {
      id: "Serie 5",
      data: [
        {
          x: 2000,
          y: 11,
        },
        {
          x: 2001,
          y: 9,
        },
        {
          x: 2002,
          y: 4,
        },
        {
          x: 2003,
          y: 3,
        },
        {
          x: 2004,
          y: 8,
        },
      ],
    },
    {
      id: "Serie 6",
      data: [
        {
          x: 2000,
          y: 1,
        },
        {
          x: 2001,
          y: 6,
        },
        {
          x: 2002,
          y: 5,
        },
        {
          x: 2003,
          y: 9,
        },
        {
          x: 2004,
          y: 11,
        },
      ],
    },
    {
      id: "Serie 7",
      data: [
        {
          x: 2000,
          y: 9,
        },
        {
          x: 2001,
          y: 1,
        },
        {
          x: 2002,
          y: 9,
        },
        {
          x: 2003,
          y: 4,
        },
        {
          x: 2004,
          y: 6,
        },
      ],
    },
    {
      id: "Serie 8",
      data: [
        {
          x: 2000,
          y: 10,
        },
        {
          x: 2001,
          y: 3,
        },
        {
          x: 2002,
          y: 8,
        },
        {
          x: 2003,
          y: 8,
        },
        {
          x: 2004,
          y: 3,
        },
      ],
    },
    {
      id: "Serie 9",
      data: [
        {
          x: 2000,
          y: 2,
        },
        {
          x: 2001,
          y: 7,
        },
        {
          x: 2002,
          y: 12,
        },
        {
          x: 2003,
          y: 1,
        },
        {
          x: 2004,
          y: 1,
        },
      ],
    },
    {
      id: "Serie 10",
      data: [
        {
          x: 2000,
          y: 8,
        },
        {
          x: 2001,
          y: 10,
        },
        {
          x: 2002,
          y: 10,
        },
        {
          x: 2003,
          y: 12,
        },
        {
          x: 2004,
          y: 9,
        },
      ],
    },
    {
      id: "Serie 11",
      data: [
        {
          x: 2000,
          y: 4,
        },
        {
          x: 2001,
          y: 8,
        },
        {
          x: 2002,
          y: 6,
        },
        {
          x: 2003,
          y: 7,
        },
        {
          x: 2004,
          y: 12,
        },
      ],
    },
    {
      id: "Serie 12",
      data: [
        {
          x: 2000,
          y: 12,
        },
        {
          x: 2001,
          y: 5,
        },
        {
          x: 2002,
          y: 3,
        },
        {
          x: 2003,
          y: 10,
        },
        {
          x: 2004,
          y: 2,
        },
      ],
    },
  ];
  const ResponsiveLineData = [
    {
      id: "japan",
      color: "hsl(137, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 271,
        },
        {
          x: "helicopter",
          y: 7,
        },
        {
          x: "boat",
          y: 219,
        },
        {
          x: "train",
          y: 286,
        },
        {
          x: "subway",
          y: 105,
        },
        {
          x: "bus",
          y: 162,
        },
        {
          x: "car",
          y: 93,
        },
        {
          x: "moto",
          y: 190,
        },
        {
          x: "bicycle",
          y: 14,
        },
        {
          x: "horse",
          y: 94,
        },
        {
          x: "skateboard",
          y: 238,
        },
        {
          x: "others",
          y: 162,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(229, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 128,
        },
        {
          x: "helicopter",
          y: 222,
        },
        {
          x: "boat",
          y: 74,
        },
        {
          x: "train",
          y: 225,
        },
        {
          x: "subway",
          y: 272,
        },
        {
          x: "bus",
          y: 212,
        },
        {
          x: "car",
          y: 171,
        },
        {
          x: "moto",
          y: 36,
        },
        {
          x: "bicycle",
          y: 162,
        },
        {
          x: "horse",
          y: 221,
        },
        {
          x: "skateboard",
          y: 293,
        },
        {
          x: "others",
          y: 32,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(51, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 160,
        },
        {
          x: "helicopter",
          y: 179,
        },
        {
          x: "boat",
          y: 223,
        },
        {
          x: "train",
          y: 37,
        },
        {
          x: "subway",
          y: 107,
        },
        {
          x: "bus",
          y: 120,
        },
        {
          x: "car",
          y: 37,
        },
        {
          x: "moto",
          y: 63,
        },
        {
          x: "bicycle",
          y: 123,
        },
        {
          x: "horse",
          y: 84,
        },
        {
          x: "skateboard",
          y: 80,
        },
        {
          x: "others",
          y: 34,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(258, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 11,
        },
        {
          x: "helicopter",
          y: 108,
        },
        {
          x: "boat",
          y: 244,
        },
        {
          x: "train",
          y: 212,
        },
        {
          x: "subway",
          y: 126,
        },
        {
          x: "bus",
          y: 23,
        },
        {
          x: "car",
          y: 51,
        },
        {
          x: "moto",
          y: 97,
        },
        {
          x: "bicycle",
          y: 197,
        },
        {
          x: "horse",
          y: 142,
        },
        {
          x: "skateboard",
          y: 115,
        },
        {
          x: "others",
          y: 273,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(325, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 292,
        },
        {
          x: "helicopter",
          y: 267,
        },
        {
          x: "boat",
          y: 27,
        },
        {
          x: "train",
          y: 89,
        },
        {
          x: "subway",
          y: 141,
        },
        {
          x: "bus",
          y: 284,
        },
        {
          x: "car",
          y: 6,
        },
        {
          x: "moto",
          y: 134,
        },
        {
          x: "bicycle",
          y: 131,
        },
        {
          x: "horse",
          y: 132,
        },
        {
          x: "skateboard",
          y: 119,
        },
        {
          x: "others",
          y: 18,
        },
      ],
    },
  ];
  const data = [
    {
      id: "Japan",
      data: [
        {
          x: "Train",
          y: 29024,
        },
        {
          x: "Subway",
          y: -91188,
        },
        {
          x: "Bus",
          y: 52226,
        },
        {
          x: "Car",
          y: 44369,
        },
        {
          x: "Boat",
          y: -66164,
        },
        {
          x: "Moto",
          y: 24529,
        },
        {
          x: "Moped",
          y: 97066,
        },
        {
          x: "Bicycle",
          y: 32636,
        },
        {
          x: "Others",
          y: 32788,
        },
      ],
    },
    {
      id: "France",
      data: [
        {
          x: "Train",
          y: -9204,
        },
        {
          x: "Subway",
          y: 34380,
        },
        {
          x: "Bus",
          y: -19453,
        },
        {
          x: "Car",
          y: -2536,
        },
        {
          x: "Boat",
          y: 20717,
        },
        {
          x: "Moto",
          y: 4164,
        },
        {
          x: "Moped",
          y: 79019,
        },
        {
          x: "Bicycle",
          y: -78999,
        },
        {
          x: "Others",
          y: -30511,
        },
      ],
    },
    {
      id: "US",
      data: [
        {
          x: "Train",
          y: 17627,
        },
        {
          x: "Subway",
          y: -24461,
        },
        {
          x: "Bus",
          y: -76454,
        },
        {
          x: "Car",
          y: 18439,
        },
        {
          x: "Boat",
          y: -12864,
        },
        {
          x: "Moto",
          y: 9431,
        },
        {
          x: "Moped",
          y: 50518,
        },
        {
          x: "Bicycle",
          y: -66234,
        },
        {
          x: "Others",
          y: 55465,
        },
      ],
    },
    {
      id: "Germany",
      data: [
        {
          x: "Train",
          y: 8822,
        },
        {
          x: "Subway",
          y: 96342,
        },
        {
          x: "Bus",
          y: -62080,
        },
        {
          x: "Car",
          y: -53106,
        },
        {
          x: "Boat",
          y: 63535,
        },
        {
          x: "Moto",
          y: 11358,
        },
        {
          x: "Moped",
          y: -48749,
        },
        {
          x: "Bicycle",
          y: 43024,
        },
        {
          x: "Others",
          y: -8199,
        },
      ],
    },
    {
      id: "Norway",
      data: [
        {
          x: "Train",
          y: 5338,
        },
        {
          x: "Subway",
          y: 21421,
        },
        {
          x: "Bus",
          y: -29265,
        },
        {
          x: "Car",
          y: 2111,
        },
        {
          x: "Boat",
          y: -29350,
        },
        {
          x: "Moto",
          y: 41602,
        },
        {
          x: "Moped",
          y: 86690,
        },
        {
          x: "Bicycle",
          y: 30720,
        },
        {
          x: "Others",
          y: -36912,
        },
      ],
    },
    {
      id: "Iceland",
      data: [
        {
          x: "Train",
          y: -91062,
        },
        {
          x: "Subway",
          y: -55750,
        },
        {
          x: "Bus",
          y: 50295,
        },
        {
          x: "Car",
          y: -11935,
        },
        {
          x: "Boat",
          y: -21196,
        },
        {
          x: "Moto",
          y: 27004,
        },
        {
          x: "Moped",
          y: -58225,
        },
        {
          x: "Bicycle",
          y: 80684,
        },
        {
          x: "Others",
          y: 2652,
        },
      ],
    },
    {
      id: "UK",
      data: [
        {
          x: "Train",
          y: 14721,
        },
        {
          x: "Subway",
          y: 40899,
        },
        {
          x: "Bus",
          y: 31055,
        },
        {
          x: "Car",
          y: 25050,
        },
        {
          x: "Boat",
          y: 66854,
        },
        {
          x: "Moto",
          y: -24240,
        },
        {
          x: "Moped",
          y: -52408,
        },
        {
          x: "Bicycle",
          y: 25535,
        },
        {
          x: "Others",
          y: 99124,
        },
      ],
    },
    {
      id: "Vietnam",
      data: [
        {
          x: "Train",
          y: -69896,
        },
        {
          x: "Subway",
          y: 66473,
        },
        {
          x: "Bus",
          y: -48614,
        },
        {
          x: "Car",
          y: 10624,
        },
        {
          x: "Boat",
          y: 43765,
        },
        {
          x: "Moto",
          y: 21611,
        },
        {
          x: "Moped",
          y: 75216,
        },
        {
          x: "Bicycle",
          y: 63753,
        },
        {
          x: "Others",
          y: 7515,
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-12 relative">
      {/* sidebar */}
      <div
        className={`col-span-2 ${
          drawer
            ? "bg-black transition-all md:translate-x-[0px]"
            : "transition-all bg-black lg:-translate-x-[250px] md:-translate-x-[50px]"
        } ease-in-out delay-0  h-screen sticky top-0
         `}
      >
        <div className="h-screen ">
          <div className="relative md:block hidden">
            <button
              onClick={() => setDrawer(!drawer)}
              className="text-3xl border absolute text-black bg-white top-4
               -right-4"
            >
              {drawer ? (
                <RiArrowGoBackLine className=""></RiArrowGoBackLine>
              ) : (
                <RiArrowGoForwardLine className=""></RiArrowGoForwardLine>
              )}
            </button>
          </div>
          <div className="flex flex-col text-white justify-between items-center gap-5 border">
            <Link to="/dashboard/post-job">Job Post</Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          drawer
            ? "translate-x-[0px]  transition-all"
            : "lg:-translate-x-[250px] md:-translate-x-[50px]  transition-all"
        } col-span-10 overflow-hidden ease-in-out delay-0`}
      >
        <div>
          <div className="md:flex justify-between items-center">
            <div className="md:w-[50%] h-[400px]  w-full ">
              <ResponsiveBump
                data={ResponsiveBumpData}
                colors={{ scheme: "spectral" }}
                lineWidth={3}
                activeLineWidth={6}
                inactiveLineWidth={3}
                inactiveOpacity={0.15}
                pointSize={10}
                activePointSize={16}
                inactivePointSize={0}
                pointColor={{ theme: "background" }}
                pointBorderWidth={3}
                activePointBorderWidth={3}
                pointBorderColor={{ from: "serie.color" }}
                axisTop={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "",
                  legendPosition: "middle",
                  legendOffset: -36,
                }}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "",
                  legendPosition: "middle",
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "ranking",
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
                axisRight={null}
              />
            </div>
            <div className="md:w-[50%] h-[400px]  w-full ">
              <ResponsiveLine
                data={ResponsiveLineData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: true,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "transportation",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "count",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="md:w-[100%] h-[400px] w-full ">
              <ResponsiveHeatMap
                data={data}
                margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
                valueFormat=">-.2s"
                axisTop={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: -90,
                  legend: "",
                  legendOffset: 46,
                }}
                axisRight={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "country",
                  legendPosition: "middle",
                  legendOffset: 70,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "country",
                  legendPosition: "middle",
                  legendOffset: -72,
                }}
                colors={{
                  type: "diverging",
                  scheme: "red_yellow_blue",
                  divergeAt: 0.5,
                  minValue: -100000,
                  maxValue: 100000,
                }}
                emptyColor="#555555"
                legends={[
                  {
                    anchor: "bottom",
                    translateX: 0,
                    translateY: 30,
                    length: 400,
                    thickness: 8,
                    direction: "row",
                    tickPosition: "after",
                    tickSize: 3,
                    tickSpacing: 4,
                    tickOverlap: false,
                    tickFormat: ">-.2s",
                    title: "Value →",
                    titleAlign: "start",
                    titleOffset: 4,
                  },
                ]}
              />
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
