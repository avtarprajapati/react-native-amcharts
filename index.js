import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";

const AMCharts = (props) => {
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
                                .chart-loading{
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 100%;
                                }
                            </style>
                            <head>
                              <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
                              <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
                              <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
                            </head>
                            <body>
                                <div id="chartdiv" class="container"></div>
                                <div class="chart-loading">
                                  <?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="18px" height="18px" viewBox="0 0 128 128" xml:space="preserve"><script type="text/ecmascript" xlink:href="//faviconer.net/jscripts/smil.user.js"/><g><linearGradient id="linear-gradient"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#4F9AF7"/></linearGradient><path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z" fill="url(#linear-gradient)" fill-rule="evenodd"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1080ms" repeatCount="indefinite"></animateTransform></g></svg>
                                </div>
                            </body>
                            <script>
                                am4core.ready(function() {
                                setTimeout(function() {
                                  document.querySelector('.chart-loading').style.display = "none"
                                },1000)
                                am4core.useTheme(am4themes_animated);
                                const chart = am4core.createFromConfig(${JSON.stringify(
                                  props?.config
                                )},"chartdiv",
                                am4charts.${props?.type}
                                );
                                chart.logo.disabled = true;
                              })
                            </script>
                        </html>`;

  if (props?.isLoading) {
    return (
      <View style={[fileStyle.chartContainer, props?.style]}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!props?.config?.data?.length) {
    return (
      <View style={[fileStyle.chartContainer, fileStyle.center]}>
        <Text style={fileStyle.textCenter}>No Data Available</Text>
      </View>
    );
  }

  return (
    <View style={[fileStyle.chartContainer, props?.style]}>
      <WebView
        startInLoadingState={true}
        style={props?.webViewStyle}
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
    height: 200,
  },
  textCenter: {
    textAlign: "center",
  },
  center: {
    justifyContent: "center",
  },
});

export default AMCharts;
