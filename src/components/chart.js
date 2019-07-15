import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../data/data';
import '../css/chart.css';



class Chart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          data:''
        }
    }

    componentDidMount(){
        this.draw()
    }


    draw(){

        const svg = d3.select("svg"),
            margin = {top: 10, right: 20, bottom: 50, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const x = d3.scaleLinear()
            .rangeRound([0,width]);

        const y = d3.scaleLinear()
            .rangeRound([height, 0]);




        const lineCount = d3.line()
            .x(function(d) { return x(d.weekEnding.substring(5,7)); })
            .y(function(d) { return y(d.retailSales); })
            .curve(d3.curveMonotoneX)


            x.domain(d3.extent(data, function(d) {return d.weekEnding.substring(5,7); }));
            y.domain(d3.extent(data, function(d) { return d.retailSales; }));


                  //plot the x axis
                g.append("g")
                    .attr("class", `axis axis--x`)
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));

                g.append("g")
                    .attr("class", 'axis axis--y')
                    .call(d3.axisLeft(y))
                //plot the color legend
                .append("text")
                    .attr("fill", "#000")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", "0.71em")
                    .style("text-anchor", "end")
                    .text("Retail Sales");

                svg.append("text")
                    .attr("transform","translate(" + (width/2) + " ," + (height + margin.top + 40) + ")")
                    .style("text-anchor", "middle")
                    .text("Months");

                g.append("path")
                    .datum(data)
                    .attr("class", `lineUsers`)
                    .attr("d", lineCount)
                    .attr("stroke-linejoin", "round")
     .attr("stroke-linecap", "round")

    }


    render(){

        return (

          <div className="container">
            <div className="chart" >
                <h3>Retail Sales</h3>
                <svg width="960" height="500" style={{border:'solid 1px #eee',borderBottom:'solid 1px #ccc', background:'white'}} />
            </div>
              </div>


        )
    }
}

export default Chart;
