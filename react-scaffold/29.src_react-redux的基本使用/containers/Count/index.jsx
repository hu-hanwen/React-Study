/**
 * 该文件是Count组件的容器组件，负责与store进行交互
 */

// 引入CountUI组件
import CountUi from "../../components/Count";
// 引入connect高阶组件
import { connect } from "react-redux";
import { increment, decrement, incrementAsync } from "../../redux/count_action";

// mapStateToProps函数接收的参数可以理解为redux中定义的store中的state
function mapStateToProps(state) {
	// 因为要将数据通过props的方式传递给CountUi组件，所以需要返回一个对象
	return {
		count: state,
	};
}

// mapDispatchToProps函数接收的参数可以理解为redux中定义的store中的dispatch
function mapDispatchToProps(dispatch) {
	// 因为要将操作状态的方法通过props的方式传递给CountUi组件，所以需要返回一个对象
	return {
		increment(data) {
			dispatch(increment(data));
		},
		decrement(data) {
			dispatch(decrement(data));
		},
		incrementAsync(data, timeout) {
			dispatch(incrementAsync(data, timeout));
		},
	};
}

/**
 * connect需要传入两个参数，mapStateToProps和mapDispatchToProps
 * mapStateToProps是一个函数，用于传递【状态】
 * mapDispatchToProps是一个函数，用于传递【操作状态的方法】
 */
// 创建Count的容器组件并暴露
export default connect(mapStateToProps, mapDispatchToProps)(CountUi);
