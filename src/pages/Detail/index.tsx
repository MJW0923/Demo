import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Button } from 'antd';
import * as styles from './style.less';
import logo from '@/images/OIP.jpg';
import { getQueryString } from '@/utils/common';
interface IProps {
  dispatch: Function;
  DetailNsp: {
    data: string;
  };
}

class Detail extends React.Component<IProps> {
  componentWillMount() {
    const data = getQueryString('data') || '0987654321';
    this.props.dispatch({
      type: 'DetailNsp/changeState',
      data,
    });
  }
  toMain = () => {
    router.push('/');
  };
  render() {
    const { data } = this.props.DetailNsp;
    return (
      <div className={styles.main}>
        Welcome to Orcrist Organization!
        <div className={styles.main__logo}>
          <img src={logo} alt="" />
        </div>
        <br />
        Main data={data}
        <br />
        <Button onClick={this.toMain}>To Main</Button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    DetailNsp: state.DetailNsp,
  };
}
export default connect(mapStateToProps)(Detail);
