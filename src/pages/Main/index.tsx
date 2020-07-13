import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Button } from 'antd';
import * as styles from './style.less';
import logo from '@/images/OIP.jpg';
interface IProps {
  dispatch: Function;
  MainNsp: {
    data: string;
  };
}

class Main extends React.Component<IProps> {
  toDetail = () => {
    const { data } = this.props.MainNsp;
    router.push(`/detail?data=${data}`);
  };
  render() {
    return (
      <div className={styles.main}>
        Welcome to Orcrist Organization!
        <div className={styles.main__logo}>
          <img src={logo} alt="" />
        </div>
        <br />
        Main
        <br />
        <Button onClick={this.toDetail}>To Detail</Button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    MainNsp: state.MainNsp,
  };
}
export default connect(mapStateToProps)(Main);
