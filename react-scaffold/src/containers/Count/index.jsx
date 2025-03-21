/**
 * 该文件是Count组件的容器组件，负责与store进行交互
 */

// 引入CountUI组件
import CountUi from "../../components/Count";
// 引入connect高阶组件
import { connect } from "react-redux";

// 创建Count的容器组件并暴露
export default connect()(CountUi);
