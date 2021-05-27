import React, { Component } from "react";
import * as echarts from 'echarts';



class Left extends Component { // 初始化状态
  async componentDidMount() {


    const data = [["2021-06-05",132],["2021-06-06",160],["2021-06-07",135],["2021-06-08",106],["2021-06-09",79],["2021-06-10",106],["2021-06-11",56],["2021-06-12",68],["2021-06-13",86],["2021-06-14",135],["2021-06-15",345],["2021-06-16",239],["2021-06-17",85],["2021-06-18",131],["2021-06-19",329],["2021-06-20",16],["2021-06-21",137],["2021-06-22",128],["2021-06-23",85],["2021-06-24",94],["2021-06-25",71],["2021-06-26",106],["2021-06-27",84],["2021-06-28",93],["2021-06-29",85],["2021-06-30",73],["2021-07-01",83],["2021-07-02",125],["2021-07-03",107],["2021-07-04",82],["2021-07-05",44],["2021-07-06",72],["2021-07-07",106],["2021-07-08",107],["2021-07-09",66],["2021-07-10",91],["2021-07-11",92],["2021-07-12",113],["2021-07-13",107],["2021-07-14",131],["2021-07-15",111],["2021-07-16",64],["2021-07-17",69],["2021-07-18",88],["2021-07-19",77],["2021-07-20",83],["2021-07-21",111],["2021-07-22",57],["2021-07-23",55],["2021-07-24",60]];
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });


    const myChart = echarts.init(document.getElementById("left"));
    myChart.setOption(
      {
        visualMap: [{
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        }, {
          show: false,
          type: 'continuous',
          seriesIndex: 1,
          dimension: 0,
          min: 0,
          max: dateList.length - 1
        }],


        title: [{
          left: 'center',
          text: '总电流曲线'
        }, {
          top: '55%',
          left: 'center',
          text: '总电压曲线'
        }],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [{
          data: dateList
        }, {
          data: dateList,
          gridIndex: 1
        }],
        yAxis: [{
        }, {
          gridIndex: 1
        }],
        grid: [{
          bottom: '60%'
        }, {
          top: '60%'
        }],
        series: [{
          type: 'line',
          showSymbol: false,
          data: valueList
        }, {
          type: 'line',
          showSymbol: false,
          data: valueList,
          xAxisIndex: 1,
          yAxisIndex: 1
        }]

      }
    );
  }
  render() {
    return <div id = "left" style = { {  width: 800, height: 600 }}> </div>;
  }
}
export default Left;

