const SAMPLE_INSIGHT_PLOTLY_CONFIG: string = `
{
  "data": [
    {
      "alignmentgroup": "True",
      "hovertemplate": "Manufacturer Item Category Name=%{x}<br>Total Spend ($)=%{y}<extra></extra>",
      "legendgroup": "",
      "marker": {
        "color": "#636efa"
      },
      "name": "",
      "offsetgroup": "",
      "orientation": "v",
      "showlegend": false,
      "textposition": "auto",
      "type": "bar",
      "x": [
        "Juice - Concentrate",
        "Lids Containers& Plates& Bowls& Platters",
        "Can Liners (Trash Bags)",
        "Cutlery Kits",
        "Breasts Unbreaded",
        "Containers Plastic",
        "Bowl Foam",
        "Cups Plastic",
        "Milk Lowfat",
        "Pork Bacon"
      ],
      "xaxis": "x",
      "y": [
        3635.26,
        2563.31,
        2554.25,
        1797.95,
        1766.7,
        1603.32,
        1452.75,
        1402,
        1332.88,
        1111.82
      ],
      "yaxis": "y"
    }
  ],
  "layout": {
    "barmode": "relative",
    "legend": {
      "tracegroupgap": 0
    },
    "margin": {
      "t": 60
    },
    "template": {
      "data": {
        "bar": [
          {
            "error_x": {
              "color": "#2a3f5f"
            },
            "error_y": {
              "color": "#2a3f5f"
            },
            "marker": {
              "line": {
                "color": "#E5ECF6",
                "width": 0.5
              }
            },
            "type": "bar"
          }
        ],
        "barpolar": [
          {
            "marker": {
              "line": {
                "color": "#E5ECF6",
                "width": 0.5
              }
            },
            "type": "barpolar"
          }
        ],
        "carpet": [
          {
            "aaxis": {
              "endlinecolor": "#2a3f5f",
              "gridcolor": "white",
              "linecolor": "white",
              "minorgridcolor": "white",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "endlinecolor": "#2a3f5f",
              "gridcolor": "white",
              "linecolor": "white",
              "minorgridcolor": "white",
              "startlinecolor": "#2a3f5f"
            },
            "type": "carpet"
          }
        ],
        "choropleth": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "type": "choropleth"
          }
        ],
        "contour": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "colorscale": [
              [
                0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1,
                "#f0f921"
              ]
            ],
            "type": "contour"
          }
        ],
        "contourcarpet": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "type": "contourcarpet"
          }
        ],
        "heatmap": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "colorscale": [
              [
                0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1,
                "#f0f921"
              ]
            ],
            "type": "heatmap"
          }
        ],
        "heatmapgl": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "colorscale": [
              [
                0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1,
                "#f0f921"
              ]
            ],
            "type": "heatmapgl"
          }
        ],
        "histogram": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "histogram"
          }
        ],
        "histogram2d": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "colorscale": [
              [
                0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1,
                "#f0f921"
              ]
            ],
            "type": "histogram2d"
          }
        ],
        "histogram2dcontour": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "colorscale": [
              [
                0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1,
                "#f0f921"
              ]
            ],
            "type": "histogram2dcontour"
          }
        ],
        "mesh3d": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "type": "mesh3d"
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "parcoords"
          }
        ],
        "pie": [
          {
            "automargin": true,
            "type": "pie"
          }
        ],
        "scatter": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scatter"
          }
        ],
        "scatter3d": [
          {
            "line": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scatter3d"
          }
        ],
        "scattercarpet": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scattercarpet"
          }
        ],
        "scattergeo": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scattergeo"
          }
        ],
        "scattergl": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scattergl"
          }
        ],
        "scattermapbox": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scattermapbox"
          }
        ],
        "scatterpolar": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scatterpolar"
          }
        ],
        "scatterpolargl": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scatterpolargl"
          }
        ],
        "scatterternary": [
          {
            "marker": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "type": "scatterternary"
          }
        ],
        "surface": [
          {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            },
            "colorscale": [
              [
                0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1,
                "#f0f921"
              ]
            ],
            "type": "surface"
          }
        ],
        "table": [
          {
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            },
            "type": "table"
          }
        ]
      },
      "layout": {
        "annotationdefaults": {
          "arrowcolor": "#2a3f5f",
          "arrowhead": 0,
          "arrowwidth": 1
        },
        "autotypenumbers": "strict",
        "coloraxis": {
          "colorbar": {
            "outlinewidth": 0,
            "ticks": ""
          }
        },
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0d0887"
            ],
            [
              0.1111111111111111,
              "#46039f"
            ],
            [
              0.2222222222222222,
              "#7201a8"
            ],
            [
              0.3333333333333333,
              "#9c179e"
            ],
            [
              0.4444444444444444,
              "#bd3786"
            ],
            [
              0.5555555555555556,
              "#d8576b"
            ],
            [
              0.6666666666666666,
              "#ed7953"
            ],
            [
              0.7777777777777778,
              "#fb9f3a"
            ],
            [
              0.8888888888888888,
              "#fdca26"
            ],
            [
              1,
              "#f0f921"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0d0887"
            ],
            [
              0.1111111111111111,
              "#46039f"
            ],
            [
              0.2222222222222222,
              "#7201a8"
            ],
            [
              0.3333333333333333,
              "#9c179e"
            ],
            [
              0.4444444444444444,
              "#bd3786"
            ],
            [
              0.5555555555555556,
              "#d8576b"
            ],
            [
              0.6666666666666666,
              "#ed7953"
            ],
            [
              0.7777777777777778,
              "#fb9f3a"
            ],
            [
              0.8888888888888888,
              "#fdca26"
            ],
            [
              1,
              "#f0f921"
            ]
          ]
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#FFA15A",
          "#19d3f3",
          "#FF6692",
          "#B6E880",
          "#FF97FF",
          "#FECB52"
        ],
        "font": {
          "color": "#2a3f5f"
        },
        "geo": {
          "bgcolor": "white",
          "lakecolor": "white",
          "landcolor": "#E5ECF6",
          "showlakes": true,
          "showland": true,
          "subunitcolor": "white"
        },
        "hoverlabel": {
          "align": "left"
        },
        "hovermode": "closest",
        "mapbox": {
          "style": "light"
        },
        "paper_bgcolor": "white",
        "plot_bgcolor": "#E5ECF6",
        "polar": {
          "angularaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": ""
          },
          "bgcolor": "#E5ECF6",
          "radialaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": ""
          }
        },
        "scene": {
          "xaxis": {
            "backgroundcolor": "#E5ECF6",
            "gridcolor": "white",
            "gridwidth": 2,
            "linecolor": "white",
            "showbackground": true,
            "ticks": "",
            "zerolinecolor": "white"
          },
          "yaxis": {
            "backgroundcolor": "#E5ECF6",
            "gridcolor": "white",
            "gridwidth": 2,
            "linecolor": "white",
            "showbackground": true,
            "ticks": "",
            "zerolinecolor": "white"
          },
          "zaxis": {
            "backgroundcolor": "#E5ECF6",
            "gridcolor": "white",
            "gridwidth": 2,
            "linecolor": "white",
            "showbackground": true,
            "ticks": "",
            "zerolinecolor": "white"
          }
        },
        "shapedefaults": {
          "line": {
            "color": "#2a3f5f"
          }
        },
        "ternary": {
          "aaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": ""
          },
          "baxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": ""
          },
          "bgcolor": "#E5ECF6",
          "caxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": ""
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "automargin": true,
          "gridcolor": "white",
          "linecolor": "white",
          "ticks": "",
          "title": {
            "standoff": 15
          },
          "zerolinecolor": "white",
          "zerolinewidth": 2
        },
        "yaxis": {
          "automargin": true,
          "gridcolor": "white",
          "linecolor": "white",
          "ticks": "",
          "title": {
            "standoff": 15
          },
          "zerolinecolor": "white",
          "zerolinewidth": 2
        }
      }
    },
    "xaxis": {
      "anchor": "y",
      "categoryorder": "total descending",
      "domain": [
        0,
        1
      ],
      "title": {
        "text": "Manufacturer Item Category Name"
      }
    },
    "yaxis": {
      "anchor": "x",
      "domain": [
        0,
        1
      ],
      "title": {
        "text": "Total Spend ($)"
      }
    }
  }
}
`;

export const SAMPLE_USER_INSIGHTS = [
  {
    window: {
      window_id: '0abaaef36d4bcbe59ca63ad877df59a5',
      generator_id: 'top_performance7266c8b3a62349ffb076b014cd408738',
      view_id: '8a78d028952ed91414fc040d33aca053',
    },
    categories: ['Juice'],
    heading: '32% of Locations not Enrolled',
    title: 'Regional Program Opportunity',
    significance: 0.9,
    tags: [
      'programearnedrevenue_manufacturertotal',
      'ts_spend',
      'contractedspend_total',
      'fiscalperiodkey',
      'teams_districtcode',
      'mfritemparentcategoryname',
      'distributorname',
      'Top Performance',
    ],
    evidence: SAMPLE_INSIGHT_PLOTLY_CONFIG,
    timestamp: 1615392800,
    transcription:
      '<p> Hi manager at Acme Retirement Residence! For the month of January,the highest spend was 3635.26, which was Juice - Concentrate <br>The following items were the runner-up: Lids Containers& Plates& Bowls& Platters,Can Liners (Trash Bags),Cutlery Kits,Breasts Unbreaded</p>​​',
    payload_id: '1d651bb0ac8346e195278cdb33552b2e',
  },
  {
    window: {
      window_id: '5eda37f8a4da776db118d7d8f67bdca9',
      generator_id: 'high_spend_low_returnbfc95609a412456e816341fc67a128bc',
      view_id: '8a78d028952ed91414fc040d33aca053',
    },
    significance: 0.6,
    categories: ['Juice'],
    heading: '32% of Locations not Enrolled',
    title: 'Regional Program Opportunity',
    tags: [
      'data',
      'customer_name',
      'division',
      'negative outlier',
      'total_va',
      'ror',
      'contracted_spend',
      'analysis_length_in_days',
      'total_spend',
      'context',
      'cur',
    ],
    evidence: SAMPLE_INSIGHT_PLOTLY_CONFIG,
    timestamp: 1615338100,
    transcription:
      'The Rate of Return for one of your highest spending location is significantly lower than the division average of 15.5%.\nThis is likely related to the below-average Contract Utilization Rate, from this location.\nWe estimate an additional $86,729 in yearly VA can be earned by raising the location CUR and ROR to the division average.',
    payload_id: '76b0fb5aa665479ebfa5192b4b818f1a',
  },
];
