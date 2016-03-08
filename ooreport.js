// Takes a configuration object as an argument
// {
//   id: String,
//   logo: String,
//   title: String,
//   creator: String,
//   buildingName: String,
//   address: String,
//   company: String,
//   sections: [
//     [
//       {
//         title: String,
//         highchart: {highchart config object},
//         text: String,
//         cols: Number 1-12
//       }
//     ]
//   ],
//   footer: String,
// }

$(document).on('ready', function() {
  var highchart1 = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    };

  var highchart2 = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
      text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
        'thebulletin.metapress.com</a>'
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value; // clean, unformatted number for year
        }
      }
    },
    yAxis: {
      title: {
        text: 'Nuclear weapon states'
      },
      labels: {
        formatter: function () {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      shared: true,
      pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}<br/>'
    },
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'diamond',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'USA',
      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    }, {
      name: 'USSR/Russia',
      data: [null, null, null, null, null, null, null, null, null, null,
        5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
        4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
        15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
        33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
        35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
        21000, 20000, 19000, 18000, 18000, 17000, 16000]
    }]
  };

  var piechart = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    };

  var report = new Report({
    id: 'report-test',
    logo: 'CFL_logo.png',
    title: 'Executive Report',
    creator: 'aide@cloudforestsoftware.com',
    buildingName: 'South Main Office Building',
    address: '123 Fake Street Boulder, CO 80301',
    company: 'Franklin Developement Company',
    sections: [
      [
        {
          highchart: highchart1,
          cols: 4
        },
        {
          text: 'This project is a 100% existing building built in 2004. The total ' +
            'baseline real estate value is estimated at $19,230,400, and the ' +
            'improvements modeled here increase the value by an estimated ' +
            '12% to $22,332,900. The total cost of improvements is ' +
            'estimated at $563,200. Energy Star rating is estimated between ' +
            '75 and 100. If basic prerequisites are added, LEED-EBOM Certified ' +
            'is achievable with the modeled improvements.',
          cols: 8
        }
      ],
      [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          cols: 8
        },
        {
          highchart: highchart2,
          cols: 4
        }
      ],
      [
        {
          title: 'ENERGY',
          text: 'Sample small spots',
          highchart: piechart,
          cols: 2
        },
        {
          title: 'ENERGY',
          text: 'Sample small chart',
          highchart: piechart,
          cols: 2
        },
        {
          title: 'ENERGY',
          text: 'Sample small chart',
          highchart: piechart,
          cols: 2
        },
        {
          title: 'ENERGY',
          text: 'Sample small chart',
          highchart: piechart,
          cols: 2
        },
        {
          title: 'ENERGY',
          text: 'Sample small chart',
          highchart: piechart,
          cols: 2
        },
        {
          title: 'ENERGY',
          text: 'Sample small chart',
          highchart: piechart,
          cols: 2
        },
        {
          title: 'ENERGY',
          text: 'Sample small chart',
          highchart: piechart,
          cols: 2
        },
      ]
    ],

  });

  report.render();

  // $('#report-test').highcharts(highchart1);

});

var Report = function(input) {
  this.id = input.id;
  this.$elem = $('#'+this.id);
  this.a4 = [ 595.28,  841.89];
  var now = new Date();
  var dd = now.getDate();
  var mm = now.getMonth()+1; //January is 0!

  var yyyy = now.getFullYear();
  if(dd<10){
      dd='0'+dd
  }
  if(mm<10){
      mm='0'+mm
  }
  now = mm+'.'+dd+'.'+yyyy;
  this.time = now;
  this.logo = input.logo;
  this.title = input.title;
  this.creator = input.creator;
  this.buildingName = input.buildingName;
  this.address = input.address;
  this.company = input.company;
  this.sections = input.sections;

};


Report.prototype.executive = function () {
  var $report = $('<div>');
  $report.addClass('container');
  $report.addClass('report');

  var $header = $('<header>');
  $header.addClass('row');
  $header.append('<div class="col-xs-3"><img src="'+this.logo+'"></div>');
  $header.append('<div class="col-xs-9"><h2>'+this.title+'</h2><p>Created by: '+this.creator+
    ' on '+this.time+'<br>For more information about this report please visit cloudforestsoftware.com</p>'+
    '<p>Notes: Making some standard upgrades to existing building, renovating interiors, replacing lighting'+
    ' and plumbing fixtures.</p></div>');

  var $title = $('<section>');
  $title.addClass('row');
  $title.append('<h1>'+this.buildingName.toUpperCase()+'</h1>');
  $title.append('<h3>'+this.address+' '+this.company+'</h3>');

  $report.append($header);
  $report.append($title);

  for(var i=0; i<this.sections.length; i++) {
    $report.append('<hr>');
    var section = this.sections[i];
    var $section = $('<section>');
    $section.addClass('row');

    for(var k=0; k<section.length; k++) {
      if(section[k].highchart && section[k].text && section[k].title){
        console.log('are there 8 of me?');
        var $div = $('<div class="col-xs-'+section[k].cols+'"></div>');
        var $innerDiv = $('<div id="chart'+k+'" class="chart"></div>');
        $section.append($div);
        $div.append('<h4>'+section[k].title+'</h4>');
        $div.append($innerDiv);
        $div.highcharts(section[k].highchart);
        $div.append('<div>'+section[k].text+'</div>')
      } else {
        if(section[k].title) {
        $section.append('<h4>'+section[k].title+'</h4>');
        }
        if(section[k].highchart) {
          var $div = $('<div class="col-xs-'+section[k].cols+' chart" id="chart'+k+'"></div>');
          $div.highcharts(section[k].highchart);
          $section.append($div);
        } else if(section[k].text) {
          $section.append('<div class="col-xs-'+section[k].cols+'">'+section[k].text+'</div>');
        }
      }
    }
    $report.append($section);
  }
  this.width = this.$elem.width();
  return $report;
};

Report.prototype.render = function() {
  var self = this;
  // this.$elem.append('<button class="btn btn-default" id="export-report">Export</button>')
  // $('#export-report').on('click',function(){
  //   $('body').scrollTop(0);
  //   self.exportToPdf();
  // });
  var $executive = this.executive();
  this.$elem.append($executive);
};

// FIXME:
Report.prototype.exportToPdf = function () {
  this.getCanvas().then(function(canvas){
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF({
      unit:'px',
      format:'a4'
    });
    doc.addImage(img, 'JPEG', 10, 10);
    doc.save('techumber-html-to-pdf.pdf');
    this.$elem.width(cache_width);
  });
};

Report.prototype.getCanvas = function(){
 this.$elem.width((this.a4[0]*1.33333) -80).css('max-width','none');
 return html2canvas(this.$elem,{
     imageTimeout:2000,
     removeContainer:true
    });
}
