import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import { lineChart } from './config/sampleData';

const { width, height } = Dimensions.get('screen');

const amchartConfig = {
  pieChart: 'am4charts.PieChart',
  lineChart: 'am4charts.XYChart',
};

// <!-- 2. All scripts loaded in the package  no CDN dependency for faster performance. -->

const AMCharts = props => {
  const width = props?.width || width;
  const height = props?.height || height;

  console.log(`${Platform.OS} ${width} ${height}`);

  const chartHtml = `<html>
                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1, user-scalable=0"
                            />
                            <style media="screen" type="text/css">
                                .container {
                                  width: ${width};
                                  height: ${height};
                                  top:0;
                                  left:0;
                                  right:0;
                                  bottom:0;
                                  position:absolute;
                                  user-select: none;
                                  -webkit-user-select: none;
                                }
                            </style>
                            <head>
                                <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
                                <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
                                <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
                            </head>
                            <body>
                                <div id="chartdiv" class="container"></div>
                            </body>
                            <script>
                                am4core.useTheme(am4themes_animated);
                                const chart = am4core.createFromConfig(${JSON.stringify(
                                  props?.config,
                                )},"chartdiv",
                                ${amchartConfig[props?.type]}
                                );
                               chart.logo.disabled = true;
                            </script>
                        </html>`;

  if (!props?.config?.data?.length) {
    return (
      <View style={fileStyle.chartContainer}>
        <Text>No Data Available</Text>
      </View>
    );
  }

  if (props?.isLoading) {
    return (
      <View style={[fileStyle.chartContainer, props?.style]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={[fileStyle.chartContainer, props?.style]}>
      <WebView
        startInLoadingState={true}
        style={[fileStyle.full, { width, height }, props?.webViewStyle]}
        javaScriptEnabled
        useWebKit
        source={{
          html: chartHtml,
        }}
        scalesPageToFit
        scrollEnabled={false}
        domStorageEnabled={true}
        automaticallyAdjustContentInsets={true}
      />
    </View>
  );
};

var fileStyle = StyleSheet.create({
  chartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  full: {
    flex: 1,
    // backgroundColor: '#aaaaaa',
  },
});

AMCharts.defaultProps = {
  isLoading: false,
  type: 'lineChart', // 'pieChart',
  config: lineChart, // pieChartData,
  height: 400, // parseInt(height)
  width: parseInt(width),
};

export default AMCharts;
