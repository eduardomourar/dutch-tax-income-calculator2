'use strict';

export const CONSTANTS = {
  "years": [
    2017,
    2016,
    2015
  ],
  "defaultWorkingHours": 40,
  "workingWeeks": 52,
  "workingDays": 260,
  "initial": {
    "grossYear": 36000.00,
    "grossMonth": 3000.00,
    "grossWeek": 692.31,
    "grossDay": 138.46,
    "grossHour": 17.31,
    "netMonth": 2228.57,
  },
  "rulingThreshold": {
    "2017": {
      "normal": 37000,
      "young": 28125,
      "research": 0
    },
    "2016": {
      "normal": 36889,
      "young": 28041,
      "research": 0
    },
    "2015": {
      "normal": 36705,
      "young": 27901,
      "research": 0
    }
  },
  "payrollTax": {
    "2017": [
      {
        "bracket": 1,
        "min": 0,
        "max": 19981,
        "rate": 0.089
      },
      {
        "bracket": 2,
        "min": 19982,
        "max": 33790,
        "rate": 0.1315
      },
      {
        "bracket": 3,
        "min": 33791,
        "max": 67071,
        "rate": 0.408
      },
      {
        "bracket": 4,
        "min": 67072,
        "rate": 0.52
      }
    ],
    "2016": [
      {
        "bracket": 1,
        "min": 0,
        "max": 19922,
        "rate": 0.0840
      },
      {
        "bracket": 2,
        "min": 19923,
        "max": 33715,
        "rate": 0.1225
      },
      {
        "bracket": 3,
        "min": 33716,
        "max": 66421,
        "rate": 0.404
      },
      {
        "bracket": 4,
        "min": 66422,
        "rate": 0.52
      }
    ],
    "2015": [
      {
        "bracket": 1,
        "min": 0,
        "max": 19822,
        "rate": 0.0835
      },
      {
        "bracket": 2,
        "min": 19823,
        "max": 33589,
        "rate": 0.1385
      },
      {
        "bracket": 3,
        "min": 33590,
        "max": 57585,
        "rate": 0.42
      },
      {
        "bracket": 4,
        "min": 57586,
        "rate": 0.52
      }
    ]
  },
  "socialPercent": {
    "2017": [
      {
        "bracket": 1,
        "min": 0,
        "max": 33791,
        "rate": 0.3655,
        "social": 0.2765,
        "older": 0.0975
      }
    ],
    "2016": [
      {
        "bracket": 1,
        "min": 0,
        "max": 33716,
        "rate": 0.3655,
        "social": 0.2815,
        "older": 0.1025
      }
    ],
    "2015": [
      {
        "bracket": 1,
        "min": 0,
        "max": 33590,
        "rate": 0.3650,
        "social": 0.2815,
        "older": 0.1025
      }
    ]
  },
  "generalCredit": {
    "2017": [
      {
        "bracket": 1,
        "min": 0,
        "max": 19982,
        "rate": 2254
      },
      {
        "bracket": 2,
        "min": 19983,
        "max": 67068,
        "rate": -0.04787
      },
      {
        "bracket": 3,
        "min": 67069,
        "rate": 0
      }
    ],
    "2016": [
      {
        "bracket": 1,
        "min": 0,
        "max": 19922,
        "rate": 2242
      },
      {
        "bracket": 2,
        "min": 19923,
        "max": 66417,
        "rate": -0.04822
      },
      {
        "bracket": 3,
        "min": 66418,
        "rate": 0
      }
    ],
    "2015": [
      {
        "bracket": 1,
        "min": 0,
        "max": 19822,
        "rate": 2203
      },
      {
        "bracket": 2,
        "min": 19823,
        "max": 56935,
        "rate": -0.02320
      },
      {
        "bracket": 3,
        "min": 56936,
        "rate": 1342
      }
    ]
  },
  "labourCredit": {
    "2017": [
      {
        "bracket": 1,
        "min": 0,
        "max": 9309,
        "rate": 0.01772
      },
      {
        "bracket": 2,
        "min": 9310,
        "max": 20108,
        "rate": 0.28317
      },
      {
        "bracket": 3,
        "min": 20109,
        "max": 32444,
        "rate": 3223
      },
      {
        "bracket": 4,
        "min": 32445,
        "max": 121972,
        "rate": -0.036
      },
      {
        "bracket": 5,
        "min": 121973,
        "rate": 0
      }
    ],
    "2016": [
      {
        "bracket": 1,
        "min": 0,
        "max": 9147,
        "rate": 0.01793
      },
      {
        "bracket": 2,
        "min": 9148,
        "max": 19758,
        "rate": 0.27698
      },
      {
        "bracket": 3,
        "min": 19759,
        "max": 34015,
        "rate": 3103
      },
      {
        "bracket": 4,
        "min": 34016,
        "max": 111590,
        "rate": -0.04
      },
      {
        "bracket": 5,
        "min": 111591,
        "rate": 0
      }
    ],
    "2015": [
      {
        "bracket": 1,
        "min": 0,
        "max": 9010,
        "rate": 0.0181
      },
      {
        "bracket": 2,
        "min": 9011,
        "max": 19463,
        "rate": 0.19679
      },
      {
        "bracket": 3,
        "min": 19464,
        "max": 49770,
        "rate": 2220
      },
      {
        "bracket": 4,
        "min": 49771,
        "max": 100670,
        "rate": -0.04
      },
      {
        "bracket": 5,
        "min": 100671,
        "rate": 184
      }
    ]
  }
};
