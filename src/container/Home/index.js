import React from "react";
import { connect } from 'react-redux'
import { getList } from './store/action'
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   this.props.getList()
  // }

  render() {
    return ( 
      <React.Fragment>
        <h2>xuanran1</h2>
        {this.props.lists.map(item => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <div>{item.name}</div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

// step1
Home.loadData = (store) => {
  // 负责服务端渲染前把数据加载好
  return store.dispatch(getList())
}
const mapStateToProps = ({home}) => ({
  lists: home.lists
})
export default connect(mapStateToProps,{getList})(Home);
