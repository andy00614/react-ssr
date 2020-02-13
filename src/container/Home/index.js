import React from "react";
import { connect } from 'react-redux'
import { getList } from './store/action'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lists:[]
    }
  }
  componentWillMount() {
    this.props.getList()
  }

  render() {
    return ( 
      <div>
        <h2>xuanran1</h2>
        {this.props.lists.map(item => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = ({home}) => ({
  lists: home.lists
})
export default connect(mapStateToProps,{getList})(Home);
