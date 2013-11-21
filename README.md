highcharts-downsample: Downsample plugin for Highcharts
================================================

* Author: Sveinn Steinarsson
* Special thanks: [Borgar Þorsteinsson](https://github.com/borgar) and [DataMarket](http://datamarket.com/)

This plugin for [Highcharts](http://www.highcharts.com) downsamples
data before rendering the chart. The purpose is to try retain the
visual characteristics of the original line using considerably fewer data points.
The algorithm (called *Largest-Triangle-Three-Buckets*) used in this plugin is described in a 
Master's thesis (see [hdl.handle.net/1946/15343](http://hdl.handle.net/1946/15343)) in Computer Science by Sveinn Steinarsson 
at the [University of Iceland](http://english.hi.is/). 
The topic of the thesis is how to *downsample time series for visual representation* 
and was initially suggested by [DataMarket](http://datamarket.com/). 
JavaScript optimization was done with the help of [Borgar Þorsteinsson](https://github.com/borgar).


Demo
----
Demo can viewed at [highcharts.base.is](http://highcharts.base.is/).

Additional demo is also available in [JSFiddle](http://jsfiddle.net/sveinn_st/FMJAL/) 


Usage
-----
```js
series: {
  downsample: {
    threshold: 1000 // 0 disables downsampling for this series.
  }
}
```


Notes
-----
This plugin is mainly for downsampling line charts but might work for other types, e.g. area or column.
The recommended input data format is array of arrays with two values. Array of numerical values
is also supported but might be slower.
Array of objects and range series are not supported!


License
-------
highcharts-downsample is released under the terms of [the MIT License](http://www.opensource.org/licenses/MIT).
