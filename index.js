import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { lineChart } from "./config/sampleData";

// const { width, height } = Dimensions.get("screen");

const AMCharts = (props) => {
  const width = props?.width || width;
  const height = props?.height || height;

  const chartHtml = `<html>
                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1, user-scalable=0"
                            />
                            <style media="screen" type="text/css">
                                .container {
                                  width: 100%;
                                  height: 100%;
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
                                  props?.config
                                )},"chartdiv",
                                 am4charts.${props?.type}
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
        style={[props?.webViewStyle]}
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
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});

AMCharts.defaultProps = {
  isLoading: false,
  type: "lineChart",
  config: lineChart,
};

export default AMCharts;
