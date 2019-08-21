import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";

export default class Map extends React.Component {

  componentDidMount() {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    this.map = map;
    map.geodata = am4geodata_worldHigh;
    map.projection = new am4maps.projections.Mercator();

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    map.series.push(polygonSeries);
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}"
    polygonTemplate.fill = am4core.color("#0A53C2");
    
    polygonTemplate.events.on("hit", function (ev) {
      ev.target.fill = am4core.color("#00FFFF");
    });
  }
  
  render() {
    return (
      <div>
      <div id="chartdiv" style={{ width: "100%", height: "1000px" }}></div>
      </div>
    )
  }
}