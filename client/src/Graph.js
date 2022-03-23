// import React from 'react'
// import ReactFC from "react-fusioncharts";
// import FusionCharts from "fusioncharts";
// import Column2D from "fusioncharts/fusioncharts.charts";
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// export default function Graph({topSongsData}) {
  
//   function buildChart(){
//     const chartData = [
//       {
//         label: "Average Acousticness",
//         value: `${topSongsData.average_acousticness}`
//       },
//       {
//         label: "Average Danceability",
//         value: `${topSongsData.average_danceability}`
//       },
//       {
//         label: "Average Energy",
//         value: `${topSongsData.average_energy}`
//       },
//       {
//         label: `Average Instrumentalness`,
//         value: `${topSongsData.average_instrumentalness}`
//       },
//       {
//         label: `Average Key`,
//         value: `${topSongsData.average_key}`
//       },
//       {
//         label: `Average Liveness`,
//         value: `${topSongsData.average_liveness}`
//       },
//       {
//         label: `Average Loudness`,
//         value: `${topSongsData.average_loudness}`
//       },
//       {
//         label: `Average Mode`,
//         value: `${topSongsData.average_mode}`
//       },
//       {
//         label: `Average Speechiness`,
//         value: `${topSongsData.average_speechiness}`
//       },
//       {
//         label: `Average Tempo`,
//         value: `${topSongsData.average_tempo}`
//       },
//       {
//         label: `Average Time Signature`,
//         value: `${topSongsData.average_time_signature}`
//       },
//       {
//         label: `Average Valence`,
//         value: `${topSongsData.average_valence}`
//       },
//     ];
    
//     const chartConfigs = {
//       type: "column2d", // The chart type
//       width: "700", // Width of the chart
//       height: "400", // Height of the chart
//       dataFormat: "json", // Data type
//       dataSource: {
//         chart: {
//           caption: "Average User Data by Metric",    
//           subCaption: "Medium Term",            
//           xAxisName: "Metric",           
//           yAxisName: '',  
//           numberSuffix: '',
//           theme: "fusion"                
//         },
//         data: chartData
//       }
//     };

//     return chartConfigs
//   }

//   return (
//     <ReactFC {...buildChart()} />
//   )
// }
