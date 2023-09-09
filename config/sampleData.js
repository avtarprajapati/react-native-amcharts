export const pieChartData = {
  responsive: {
    enabled: true,
  },

  series: [
    {
      type: "PieSeries",
      dataFields: {
        value: "litres",
        category: "country",
      },
    },
  ],

  // Add data
  data: [
    {
      country: "Lithuania",
      litres: 501.9,
    },
    {
      country: "Czechia",
      litres: 301.9,
    },
    {
      country: "Ireland",
      litres: 201.1,
    },
    {
      country: "Germany",
      litres: 165.8,
    },
    {
      country: "Australia",
      litres: 139.9,
    },
    {
      country: "Austria",
      litres: 128.3,
    },
    {
      country: "UK",
      litres: 99,
    },
    {
      country: "Belgium",
      litres: 60,
    },
    {
      country: "The Netherlands",
      litres: 50,
    },
  ],

  // And, for a good measure, let's add a legend
  legend: {
    scrollable: true,
  },
};

// bullet points color #2C61F3
export const lineChart = {
  // Create pie series
  series: [
    {
      type: "LineSeries",
      dataFields: {
        valueY: "value",
        dateX: "year",
      },
      tooltipText: `Nav: {value} on {year}`, // .formatDate('d MMM yyyy')
      tooltip: {
        pointerOrientation: "down",
        getFillFromObject: false,
        background: {
          cornerRadius: 10,
          stroke: "#EFEFEF",
          fill: "#fff",
          filters: [
            {
              opacity: 0,
            },
          ],
        },
        label: {
          fill: "#2D2C2D",
        },
      },

      stroke: "#2C61F3",
      strokeWidth: 2,
      fillOpacity: 0.08,
      // Gradient fill style
      segments: {
        fillModifier: {
          type: "LinearGradientModifier",
          opacities: [1, 0],
          offsets: [0, 1],
          gradient: {
            rotation: 90,
          },
        },
      },

      // bullets: [
      //     {
      //         type: 'CircleBullet',
      //         circle: {
      //             radius: 6,
      //             stroke: '#2C61F3',
      //             // strokeWidth: 2,
      //             fillOpacity: 0,
      //             strokeOpacity: 0,
      //         },
      //         states: {
      //             hover: {
      //                 properties: {
      //                     fillOpacity: 1,
      //                     strokeOpacity: 1,
      //                 },
      //             },
      //         },
      //     },
      // ],

      // bullets: {
      //     fillOpacity:0,
      //     strokeOpacity:0,
      //     circle: {
      //         stroke: '#2C61F3',
      //         strokeWidth: 2,
      //     },
      //     states: {
      //         create: 'hover',
      //     },
      //     properties: {
      //         fillOpacity: 1,
      //         strokeOpacity:1,
      //     },
      // },
    },
  ],

  // Add data
  data: [
    {
      year: "1967",
      value: -0.15,
    },
    {
      year: "1968",
      value: -0.16,
    },
    {
      year: "1969",
      value: -0.011,
    },
    {
      year: "1970",
      value: -0.068,
    },
    {
      year: "1971",
      value: -0.19,
    },
    {
      year: "1972",
      value: -0.056,
    },
    {
      year: "1973",
      value: 0.077,
    },
    {
      year: "1974",
      value: -0.213,
    },
    {
      year: "1975",
      value: -0.17,
    },
    {
      year: "1976",
      value: -0.254,
    },
    {
      year: "1977",
      value: 0.019,
    },
    {
      year: "1978",
      value: -0.063,
    },
    {
      year: "1979",
      value: 0.05,
    },
    {
      year: "1980",
      value: 0.077,
    },
    {
      year: "1981",
      value: 0.12,
    },
    {
      year: "1982",
      value: 0.011,
    },
    {
      year: "1983",
      value: 0.177,
    },
    {
      year: "1984",
      value: -0.021,
    },
    {
      year: "1985",
      value: -0.037,
    },
    {
      year: "1986",
      value: 0.03,
    },
    {
      year: "1987",
      value: 0.179,
    },
    {
      year: "1988",
      value: 0.18,
    },
    {
      year: "1989",
      value: 0.104,
    },
    {
      year: "1990",
      value: 0.255,
    },
    {
      year: "1991",
      value: 0.21,
    },
    {
      year: "1992",
      value: 0.065,
    },
    {
      year: "1993",
      value: 0.11,
    },
    {
      year: "1994",
      value: 0.172,
    },
    {
      year: "1995",
      value: 0.269,
    },
    {
      year: "1996",
      value: 0.141,
    },
    {
      year: "1997",
      value: 0.353,
    },
    {
      year: "1998",
      value: 0.548,
    },
    {
      year: "1999",
      value: 0.298,
    },
    {
      year: "2000",
      value: 0.267,
    },
    {
      year: "2001",
      value: 0.411,
    },
    {
      year: "2002",
      value: 0.462,
    },
    {
      year: "2003",
      value: 0.47,
    },
    {
      year: "2004",
      value: 0.445,
    },
    {
      year: "2005",
      value: 0.47,
    },
  ],
  cursor: {
    behavior: "none",
  },
  xAxes: [
    {
      type: "DateAxis",
      cursorTooltipEnabled: false,
      renderer: {
        grid: {
          disabled: true,
        },
        labels: {
          template: {
            disabled: true,
          },
        },
      },
    },
  ],
  yAxes: [
    {
      type: "ValueAxis",
      cursorTooltipEnabled: false,
      renderer: {
        grid: {
          disabled: true,
        },
        labels: {
          template: {
            disabled: true,
          },
        },
      },
    },
  ],

  // And, for a good measure, let's add a legend
  // legend: {},
};
