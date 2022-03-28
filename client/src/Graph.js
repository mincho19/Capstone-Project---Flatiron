import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";

import Column2D from "fusioncharts/fusioncharts.charts";
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';


ReactFC.fcRoot(FusionCharts, Column2D, CandyTheme);

export default function Graph({topSongsData}) {
  
    const chartData = [
      {
        label: "Acousticness",
        value: `${topSongsData.average_acousticness}`
      },
      {
        label: "Danceability",
        value: `${topSongsData.average_danceability}`
      },
      {
        label: "Energy",
        value: `${topSongsData.average_energy}`
      },
      {
        label: `Instrumentalness`,
        value: `${topSongsData.average_instrumentalness}`
      },
    //   {
    //     label: `Average Key`,
    //     value: `${topSongsData.average_key}`
    //   },
      {
        label: `Liveness`,
        value: `${topSongsData.average_liveness}`
      },
    //   {
    //     label: `Average Loudness`,
    //     value: `${topSongsData.average_loudness}`
    //   },
      {
        label: `Mode`,
        value: `${topSongsData.average_mode}`
      },
      {
        label: `Speechiness`,
        value: `${topSongsData.average_speechiness}`
      },
    //   {
    //     label: `Average Tempo`,
    //     value: `${topSongsData.average_tempo}`
    //   },
    //   {
    //     label: `Average Time Signature`,
    //     value: `${topSongsData.average_time_signature}`
    //   },
      {
        label: `Valence`,
        value: `${topSongsData.average_valence}`
      },
    ];
    
    const chartConfigs = {
      type: "column2d", // The chart type
      width: "700", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        chart: {
          caption: "Average User Data by Metric",    
          subCaption: "Medium Term",            
          xAxisName: "Metric",           
          yAxisName: '',  
          numberSuffix: '',
          theme: "candy",
          bgColor: "black",              
        },
        data: chartData
      }
    };  

  return (
    <ReactFC className = "graph" {...chartConfigs} />
  )
}
