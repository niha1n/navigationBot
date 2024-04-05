var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-reception",
      "name": "panorama reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7509192489179348,
        "pitch": 0.0146982525742132,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 1.7751103854708496,
          "pitch": 0.26089400688660547,
          "rotation": 1.5707963267948966,
          "target": "1-reception-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception-right",
      "name": "reception right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5476350345832266,
        "pitch": 0,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.5441916975368848,
          "pitch": 0.30052223219752605,
          "rotation": 18.84955592153877,
          "target": "2-ec-entrance-1"
        },
        {
          "yaw": 1.8235112754960943,
          "pitch": 0.469730737313542,
          "rotation": 0,
          "target": "0-panorama-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ec-entrance-1",
      "name": "EC entrance 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3511269271112507,
        "pitch": -0.023654511136520284,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -2.306893676829551,
          "pitch": 0.43353135482212224,
          "rotation": 0,
          "target": "3-ec-staffroom-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7453079400182236,
          "pitch": -0.5401968156459276,
          "title": "ECE department entrance",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-ec-staffroom-1",
      "name": "EC staffroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.145047024171248,
        "pitch": 0.05594879582330137,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 1.0412676473962001,
          "pitch": 0.34320560136638534,
          "rotation": 0,
          "target": "4-ec-integrated-circuit-lab"
        },
        {
          "yaw": -1.6873777477177825,
          "pitch": 0.3115555343421299,
          "rotation": 0,
          "target": "2-ec-entrance-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ec-integrated-circuit-lab",
      "name": "EC Integrated circuit lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1991475339270234,
        "pitch": 0.005869865632298854,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.1279439448534134,
          "pitch": 0.4138895605024562,
          "rotation": 0,
          "target": "5-ec-our-class"
        },
        {
          "yaw": -2.711507519790029,
          "pitch": 0.4339225444064798,
          "rotation": 0,
          "target": "3-ec-staffroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ec-our-class",
      "name": "EC our class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3543147717779753,
        "pitch": 0.01565537001398809,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -2.3439210128242465,
          "pitch": 0.38372490024186945,
          "rotation": 0,
          "target": "6-ec-hod"
        },
        {
          "yaw": 0.8349257762484044,
          "pitch": 0.3799148085418729,
          "rotation": 0,
          "target": "4-ec-integrated-circuit-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ec-hod",
      "name": "EC HOD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3803021400464104,
        "pitch": -0.020616288838894548,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.29727159661064917,
          "pitch": 0.262348010816039,
          "rotation": 0,
          "target": "5-ec-our-class"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0043432606737746,
          "pitch": 0.1333096830941809,
          "title": "ECE HOD room",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "ECE HOD room",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
