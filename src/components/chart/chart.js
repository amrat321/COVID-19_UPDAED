import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');



const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 0.9) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

class DashboardChart extends React.Component {
  render() {
    return (
      <>
        {this.props.data ? (
          <PieChart
            data={this.props.data && this.props.data}
            width={width - 12}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            absolute
            paddingLeft="12"
          />
        ) : null}
      </>
    );
  }
}

export default DashboardChart;