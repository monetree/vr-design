
import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { CodeGenerator } from "@babel/generator";
import { AmChartsLogo } from "@amcharts/amcharts4/.internal/core/elements/AmChartsLogo";

am4core.useTheme(am4themes_animated);

class Test extends React.Component {
  constructor(props) {
    super(props);

      
    };
  

  componentDidMount = () => {
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    let chart = am4core.create("candelchart", am4charts.XYChart);
    chart.paddingRight = 20;

    chart.data = [ {
        "zone": "Zone-1",
        "max": 132.3,
        "high": 136.96,
        "low": 131.15,
        "min": 136.49,
        "background":"#37FF82",
        "threshold": "100",
        "avg": 20
      }, {
        "zone": "Zone-2",
        "max": 135.26,
        "high": 135.95,
        "low": 131.50,
        "min": 131.85,
        "background":"#FF7171",
        "threshold": "100",
        "avg": 200
        
      }, {
        "zone": "Zone-3",
        "max": 129.90,
        "high": 133.27,
        "low": 128.30,
        "min": 132,
        "background":"#FF7171",
        "threshold": "100",
        "avg": 200
      }, {
        "zone": "Zone-4",
        "max": 132.94,
        "high": 136.24,
        "low": 132.63,
        "min": 135.03,
        "background":"#FF7171",
        "threshold": "300",
        "avg": 200
      }, {
        "zone": "Zone-5",
        "max": 136.76,
        "high": 137.86,
        "low": 132.00,
        "min": 134.01,
        "background":"#FF7171",
        "threshold": "100",
        "avg": 200
      }, {
        "zone": "Zone-6",
        "max": 131.11,
        "high": 133.00,
        "low": 125.09,
        "min": 126.39,
        "background":"#37FF82",
        "threshold": "100",
        "avg": 200
      }, {
        "zone": "Zone-7",
        "max": 130.11,
        "high": 133.00,
        "low": 125.09,
        "min": 127.39,
        "background":"#37FF82",
        "threshold": "100",
        "avg": 200
      }, {
        "zone": "Zone-8",
        "max": 125.11,
        "high": 126.00,
        "low": 121.09,
        "min": 122.39,
        "background":"#37FF82",
        "threshold": "210",
        "avg": 200
      }];

      for(let i of chart.data){
          if(i.threshold > i.avg){
              i["background"] = "#37FF82"
          } else {
            i["background"] = "#FF7171"
          }
      }

    
    
    // chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.minGridDistance = 40;
    // dateAxis.renderer.grid.template.location = 0;
    // dateAxis.renderer.grid.template.disabled = true;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "zone";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.renderer.grid.template.disabled = true;


    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    // valueAxis.renderer.gridContainer.propertyFields.grid = "background";
    // console.log(valueAxis.renderer.gridContainer)
    // valueAxis.renderer.gridContainer.background.propertyFields.fill = "background";


    

    
    let series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.categoryX = "zone";
    series.dataFields.valueY = "min";
    series.dataFields.openValueY = "max";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    series.simplifiedProcessing = true;
    series.tooltipText = "Max:{openValueY.value}\nAvg:{lowValueY.value}\nThreshold:{highValueY.value}\nMin:{valueY.value}";
    series.riseFromOpenState = undefined;
    series.dropFromOpenState = undefined;
    chart.cursor = new am4charts.XYCursor();
    series.columns.template.propertyFields.fill = "background";
    series.columns.template.propertyFields.stroke = "background";
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.columns.template.column.cornerRadiusTopLeft = 5;
    series.columns.template.column.cornerRadiusBottomLeft = 5;
    series.columns.template.column.cornerRadiusBottomRight = 5;


    

    
    let topSeries = chart.series.push(new am4charts.StepLineSeries());
    topSeries.noRisers = true;
    topSeries.startLocation = 0.2;
    topSeries.endLocation = 0.8;
    topSeries.dataFields.valueY = "high";
    topSeries.dataFields.categoryX = "zone";
    topSeries.propertyFields.stroke= "background";
    topSeries.strokeWidth = 2;

    
    let bottomSeries = chart.series.push(new am4charts.StepLineSeries());
    bottomSeries.noRisers = true;
    bottomSeries.startLocation = 0.2;
    bottomSeries.endLocation = 0.8;
    bottomSeries.dataFields.valueY = "low";
    bottomSeries.dataFields.categoryX = "zone";
    bottomSeries.propertyFields.stroke =  "background";
    bottomSeries.strokeWidth = 2;
    

    
    // chart.scrollbarX = new am4core.Scrollbar();



    // series. = am4core.color("red");
    function createBackground(x, y, widthin, heightin, colorin) {
        var rect = chart.createChild(am4core.Rectangle);
        rect.isMeasured = false;
        rect.width = am4core.percent(widthin);
        rect.height = am4core.percent(heightin);
        rect.x = am4core.percent(x);
        rect.y = am4core.percent(y);
        rect.opacity = .3;
        rect.fill = colorin;
        chart.plotContainer.children.push(rect);
        rect.defaultState.transitionDuration = 0;
        rect.hiddenState.transitionDuration = 0;
      }
  
  
    createBackground(0, 0, 12, 100, "red");
    createBackground(12, 0, 13, 100, "blue");
    createBackground(25, 0, 12, 100, "red");
    createBackground(37, 0, 13, 100, "blue");
    createBackground(50, 0, 12, 100, "red");
    createBackground(62, 0, 13, 100, "blue");
    createBackground(75, 0, 12, 100, "red");
    createBackground(87, 0, 12, 100, "blue");



};


  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }



  render() {
    return (
        <div id="candelchart" style={{ height:'400px' }}>
        </div>
    )
  }
}

export default Test;




