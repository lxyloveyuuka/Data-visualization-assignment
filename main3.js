window.onload = function() {
    // Initialize charts
    var orderDistributionChart = echarts.init(document.getElementById('order-distribution'));
    var salesByStoreChart = echarts.init(document.getElementById('sales-by-store'));
    var salesByPaymentChart = echarts.init(document.getElementById('sales-by-payment'));
    var salesInChinese = echarts.init(document.getElementById('sales-in-Chinese'));
    var salesByManagerChart = echarts.init(document.getElementById('sales-by-manager'));

    // Mock data
    var orderDates = ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'];
    var orderCounts = [120, 200, 150, 80, 70];

    var stores = ['定远路店', '人民路店', '杨店店', '庐江路', '金寨店'];
    var salesByStore = [5000, 7000, 3000, 2000, 4000];

    var paymentMethods = ['信用卡', '支付宝', '微信', '其它'];
    var salesByPayment = [
        {value: 10000, name: '信用卡'},
        {value: 8000, name: '支付宝'},
        {value: 6000, name: '微信'},
        {value: 2000, name: '其它'}
    ];

    // Order Distribution by Date
    var orderDistributionOption = {
title: {
    text: '不同类别年度销售额统计',
    textStyle: {
      color: '#FFFFFF' // 设置标题文本颜色为白色
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {
        iconStyle: {
          color: '#FFFFFF' // 设置工具箱图标颜色为白色
        }
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      axisLabel: {
        color: '#FFFFFF' // 设置x轴标签文本颜色为白色
      },
      axisLine: {
        lineStyle: {
          color: '#FFFFFF' // 设置x轴轴线颜色为白色
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#FFFFFF' // 设置y轴标签文本颜色为白色
      },
      axisLine: {
        lineStyle: {
          color: '#FFFFFF' // 设置y轴轴线颜色为白色
        }
      },
      splitLine: {
        lineStyle: {
          color: '#FFFFFF' // 设置y轴分隔线颜色为白色
        }
      }
    }
  ],
  series: [
    {
      name: '办公用品',
      type: 'line',
      stack: 'Total',
      lineStyle: { color: '#9b8bba' }, // 设置线条颜色
      areaStyle: { color: '#9b8bba' }, // 设置区域颜色
      emphasis: {
        focus: 'series'
      },
      data: [2578113.139, 2628933.972, 2650808.202, 1328824.924, 1541214.836, 1867400.976, 791348.236]
    },
    {
      name: '技术',
      type: 'line',
      stack: 'Total',
      lineStyle: { color: '#e098c7' }, // 设置线条颜色
      areaStyle: { color: '#e098c7' }, // 设置区域颜色
      emphasis: {
        focus: 'series'
      },
      data: [834861.251, 981351.696, 817150.6, 1560343.568, 1849032.024, 1919993.964, 783529.348]
    },
    {
      name: '家具',
      type: 'line',
      stack: 'Total',
      lineStyle: { color: '#8fd3e8' }, // 设置线条颜色
      areaStyle: { color: '#8fd3e8' }, // 设置区域颜色
      emphasis: {
        focus: 'series'
      },
      data: [999288.479, 887797.47, 1071357.259, 1790104.197, 1667998.78, 2143546.188, 875061.852]
    }
  ]
};
    orderDistributionChart.setOption(orderDistributionOption);

    // 门店销售额
    var salesByStoreOption = {
        title: { text: '门店销售额', textStyle: { color: '#fff' } },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: { type: 'category', data: stores, axisLine: { lineStyle: { color: '#fff' } } },
        yAxis: { type: 'value', axisLine: { lineStyle: { color: '#fff' } } },
        series: [{
            data: salesByStore,
            type: 'bar',
            barWidth: '35%', // 柱子宽度
            itemStyle: {
                color: function(params) {
                    var colorList = ["#9b8bba", "#e098c7", "#8fd3e8", "#71669e", "#cc70af"];
                    return colorList[params.dataIndex % colorList.length];
                },
                barBorderRadius: 5 // 柱子圆角大小
            }
        }]
    };
    salesByStoreChart.setOption(salesByStoreOption);



    // 支付方式销售额
    var salesByPaymentOption = {
        title: {
    text: '支付方式销售额',
    left: 'left',
    textStyle: {
      color: 'white'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '85%',
    left: 'center',
    textStyle: {
          color: 'white'
    }
  },
  series: [
    {
      name: '支付方式',
      type: 'pie',
      radius: ['30%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
        textStyle: {
          color: 'white'
        }
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 10112383.74, name: '其他', itemStyle: { color: '#9b8bba' } },
        { value: 6524592.382, name: '微信', itemStyle: { color: '#e098c7' } },
        { value: 11137455.97, name: '信用卡', itemStyle: { color: '#8fd3e8' } },
        { value: 3793628.867, name: '支付宝', itemStyle: { color: '#71669e' } }
      ]
    }
  ]
};
    salesByPaymentChart.setOption(salesByPaymentOption);



    //销售额区域分布
    var mapName = 'china';
        var data = [
            {"name":"安徽","value":1079311.18},{"name":"北京","value":1036246.687},
            {"name":"福建","value":664749.351},{"name":"甘肃","value":584255.861},
            {"name":"广东","value":2409359.575},{"name":"广西","value":1006016.746},
            {"name":"贵州","value":168288.078},{"name":"海南","value":182215.348},
            {"name":"河北","value":1371099.422},{"name":"河南","value":1891723.281},
            {"name":"黑龙江","value":2062715.949},{"name":"湖北","value":1318439.668},
            {"name":"湖南","value":1504835.521},{"name":"吉林","value":1911958.293},
            {"name":"江苏","value":1659721.091},{"name":"江西","value":525442.386},
            {"name":"辽宁","value":1288320.978},{"name":"内蒙古","value":1023380.764},
            {"name":"宁夏","value":258961.36},{"name":"青海","value":80404.24},
            {"name":"山东","value":1916560.604},{"name":"山西","value":849805.033},
            {"name":"陕西","value":555069.025},{"name":"上海","value":954849.055999999},
            {"name":"四川","value":1412840.051},{"name":"天津","value":1202481.546},
            {"name":"西藏","value":296.8},{"name":"新疆","value":120363.684},
            {"name":"云南","value":544322.632},{"name":"浙江","value":1292554.669},
            {"name":"重庆","value":691472.082000001}
        ];

        var geoCoordMap = {};
        var toolTipData = [
            {"name": "安徽", "value": [{"name": "销售量", "value": 2578}, {"name": "销售额", "value": 1079311.18}, {"name": "利润额", "value": 66404.66}]},
    {"name": "北京", "value": [{"name": "销售量", "value": 2540}, {"name": "销售额", "value": 1036246.687}, {"name": "利润额", "value": 69562.63}]},
    {"name": "福建", "value": [{"name": "销售量", "value": 1592}, {"name": "销售额", "value": 664749.351}, {"name": "利润额", "value": 40128.61}]},
    {"name": "甘肃", "value": [{"name": "销售量", "value": 1419}, {"name": "销售额", "value": 584255.861}, {"name": "利润额", "value": 35551.98}]},
    {"name": "广东", "value": [{"name": "销售量", "value": 5273}, {"name": "销售额", "value": 2409359.575}, {"name": "利润额", "value": 144913.13}]},
    {"name": "广西", "value": [{"name": "销售量", "value": 2424}, {"name": "销售额", "value": 1006016.746}, {"name": "利润额", "value": 65263.78}]},
    {"name": "贵州", "value": [{"name": "销售量", "value": 338}, {"name": "销售额", "value": 168288.078}, {"name": "利润额", "value": 10875.57}]},
    {"name": "海南", "value": [{"name": "销售量", "value": 512}, {"name": "销售额", "value": 182215.348}, {"name": "利润额", "value": 11291.03}]},
    {"name": "河北", "value": [{"name": "销售量", "value": 3071}, {"name": "销售额", "value": 1371099.422}, {"name": "利润额", "value": 79826.41}]},
    {"name": "河南", "value": [{"name": "销售量", "value": 4370}, {"name": "销售额", "value": 1891723.281}, {"name": "利润额", "value": 109980.85}]},
    {"name": "黑龙江", "value": [{"name": "销售量", "value": 4566}, {"name": "销售额", "value": 2062715.949}, {"name": "利润额", "value": 113142.38}]},
    {"name": "湖北", "value": [{"name": "销售量", "value": 2868}, {"name": "销售额", "value": 1318439.668}, {"name": "利润额", "value": 67202.96}]},
    {"name": "湖南", "value": [{"name": "销售量", "value": 3584}, {"name": "销售额", "value": 1504835.521}, {"name": "利润额", "value": 91282.36}]},
    {"name": "吉林", "value": [{"name": "销售量", "value": 4088}, {"name": "销售额", "value": 1911958.293}, {"name": "利润额", "value": 112452.48}]},
    {"name": "江苏", "value": [{"name": "销售量", "value": 4056}, {"name": "销售额", "value": 1659721.091}, {"name": "利润额", "value": 96168.41}]},
    {"name": "江西", "value": [{"name": "销售量", "value": 1328}, {"name": "销售额", "value": 525442.386}, {"name": "利润额", "value": 35463.43}]},
    {"name": "辽宁", "value": [{"name": "销售量", "value": 3393}, {"name": "销售额", "value": 1288320.978}, {"name": "利润额", "value": 76335.97}]},
    {"name": "内蒙古", "value": [{"name": "销售量", "value": 2556}, {"name": "销售额", "value": 1023380.764}, {"name": "利润额", "value": 62028.99}]},
    {"name": "宁夏", "value": [{"name": "销售量", "value": 671}, {"name": "销售额", "value": 258961.36}, {"name": "利润额", "value": 17481.3}]},
    {"name": "青海", "value": [{"name": "销售量", "value": 147}, {"name": "销售额", "value": 80404.24}, {"name": "利润额", "value": 4719.46}]},
    {"name": "山东", "value": [{"name": "销售量", "value": 4576}, {"name": "销售额", "value": 1916560.604}, {"name": "利润额", "value": 116141}]},
    {"name": "山西", "value": [{"name": "销售量", "value": 1910}, {"name": "销售额", "value": 849805.033}, {"name": "利润额", "value": 50571.35}]},
    {"name": "陕西", "value": [{"name": "销售量", "value": 1332}, {"name": "销售额", "value": 555069.025}, {"name": "利润额", "value": 31978.46}]},
    {"name": "上海", "value": [{"name": "销售量", "value": 1976}, {"name": "销售额", "value": 954849.056}, {"name": "利润额", "value": 53272}]},
    {"name": "四川", "value": [{"name": "销售量", "value": 3278}, {"name": "销售额", "value": 1412840.051}, {"name": "利润额", "value": 75632.51}]},
    {"name": "天津", "value": [{"name": "销售量", "value": 2853}, {"name": "销售额", "value": 1202481.546}, {"name": "利润额", "value": 77869.75}]},
    {"name": "西藏", "value": [{"name": "销售量", "value": 5}, {"name": "销售额", "value": 296.8}, {"name": "利润额", "value": 44.48}]},
    {"name": "新疆", "value": [{"name": "销售量", "value": 317}, {"name": "销售额", "value": 120363.684}, {"name": "利润额", "value": 6841.02}]},
    {"name": "云南", "value": [{"name": "销售量", "value": 1239}, {"name": "销售额", "value": 544322.632}, {"name": "利润额", "value": 33781.27}]},
    {"name": "浙江", "value": [{"name": "销售量", "value": 2957}, {"name": "销售额", "value": 1292554.669}, {"name": "利润额", "value": 74335.5}]},
    {"name": "重庆", "value": [{"name": "销售量", "value": 1680}, {"name": "销售额", "value": 691472.082}, {"name": "利润额", "value": 41427.7}]},
        ];

        // 获取地图数据
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        mapFeatures.forEach(function (v) {
            var name = v.properties.name;
            geoCoordMap[name] = v.properties.cp;
        });

        var convertData = function (data) {
            return data.map(function (item) {
                var geoCoord = geoCoordMap[item.name];
                return geoCoord ? {name: item.name, value: geoCoord.concat(item.value)} : null;
            }).filter(item => item !== null);
        };

        var salesInChineseOption = {
            tooltip: {
                padding: 0,
                enterable: true,
                transitionDuration: 1,
                textStyle: {color: '#000', decoration: 'none'},
                formatter: function (params) {
                    var tipHtml = '<div style="width:280px;height:180px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                        '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' +
                        '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;"></i>' +
                        '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span></div>' +
                        '<div style="padding:20px">';

                    var data = toolTipData.find(item => item.name === params.name);
                    if (data) {
                        data.value.forEach(function (v) {
                            tipHtml += '<p style="color:#fff;font-size:12px;">' +
                                '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px"></i>' +
                                v.name + '：<span style="color:#11ee7d;margin:0 6px;">' + v.value + '</span></p>';
                        });
                    }

                    tipHtml += '</div></div>';
                    return tipHtml;
                }
            },
            visualMap: {
                show: true,
                min: 0,
                max: 2500000,
                left: '15%',
                top: '70%',
                calculable: true,
                seriesIndex: [1],
                itemWidth: 18,  // 调整视觉映射组件的宽度
                itemHeight: 100, // 调整视觉映射组件的高度
                textStyle: {
                    color: 'white'  // 将文字颜色改为白色
                },
                inRange: {color: ['#467bc0', '#04387b']}
            },
            geo: {
                show: true,
                map: mapName,
                label: {normal: {show: false}, emphasis: {show: false}},
                roam: false,
                itemStyle: {normal: {areaColor: '#023677', borderColor: '#1180c7'}, emphasis: {areaColor: '#4499d0'}}
            },
            series: [
                {
                    name: '散点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {return val[2] / 100000;},
                    label: {normal: {formatter: '{b}', position: 'right', show: true}, emphasis: {show: true}},
                    itemStyle: {normal: {color: '#fff'}}
                },
                {
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    aspectScale: 0.75,
                    showLegendSymbol: false,
                    label: {normal: {show: true}, emphasis: {show: false, textStyle: {color: '#fff'}}},
                    roam: true,
                    itemStyle: {normal: {areaColor: '#031525', borderColor: '#3B5077'}, emphasis: {areaColor: '#2B91B7'}},
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 6,
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {return b.value - a.value;}).slice(0, 10)),
                    symbolSize: function (val) {return val[2] / 200000;},
                    showEffectOn: 'render',
                    rippleEffect: {brushType: 'stroke'},
                    hoverAnimation: true,
                    label: {normal: {formatter: '{b}', position: 'left', show: false}},
                    itemStyle: {normal: {color: '#d42de6', shadowBlur: 10, shadowColor: '#d42de6'}},
                    zlevel: 1
                },
            ]
        };
        salesInChinese.setOption(salesInChineseOption);


   //经理销售额
    var salesByManagerOption = {
        title: {
    text: '经理销售额',
    left: 'left',
    textStyle: {
      color: 'white'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
    '郝杰',
    '江奕健',
    '姜伟',
    '王倩倩',
    '杨洪光',
    '张怡莲',
    ],
    textStyle: {
      color: 'white'
    }
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '销售经理',
      type: 'pie',
      radius: [10, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 5300339.394, name: '郝杰', itemStyle: { color: '#9b8bba' } },
        { value: 1622120.948, name: '江奕健', itemStyle: { color: '#e098c7' } },
        { value: 2758146.594, name: '姜伟', itemStyle: { color: '#8fd3e8' } },
        { value: 8087461.487, name: '王倩倩', itemStyle: { color: '#71669e' } },
        { value: 9136594.442, name: '杨洪光', itemStyle: { color: '#cc70af' } },
        { value: 4663398.096, name: '张怡莲', itemStyle: { color: '#7cb4cc' } }
      ],
      label: {
        textStyle: {
          color: 'white'  // 图中文字颜色为白色
        },
        labelLine: {
        length: 3,  // 调整指示线的第一段长度
        length2: 3  // 调整指示线的第二段长度
        }
      }
    }
  ]
};
    salesByManagerChart.setOption(salesByManagerOption);
};	       
