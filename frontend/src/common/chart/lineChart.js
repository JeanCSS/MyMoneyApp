import react, {Component} from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux"; 
import { bindActionCreators } from "redux";
import { getDataChart } from "./lineChartAction";

class lineChart extends Component {
  UNSAFE_componentWillMount(){ 
    this.props.getDataChart();
  }

  render() { 
    const {dataChart} = this.props.lineChart;

    const options = {
      title: "Company Performance",
      curveType: "function",
      legend: { position: "bottom" },
    };
    

    return(  
      <div className="box-body"> 
        <Chart
          chartType="Bar"
          data={dataChart}
          width="100%"
          height="400px"
          options={options}
          legendToggle
        />
      </div>
    );
  }
};

const mapStateToProps = state => ({lineChart: state.lineChart});
const mapDispatchToProps = dispatch => bindActionCreators({ getDataChart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(lineChart);