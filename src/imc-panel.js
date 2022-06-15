import * as React from 'react';
import { Radio, Space } from 'antd';

class ImcPanel extends React.Component {
    constructor(props) {
    super(props); 
    this.state = {
        value: 0,
       };
    this.onChange = this.onChange.bind(this)
  }
  
    onChange (e) {
      console.log('radio checked', e.target.value);
      this.setState({value: e.target.value});
      this.props.sexeFunction(e.target.value === 0 ? "Homme" : "Femme");
    };

    render(){

        return (<div>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Space direction="vertical">
                <Radio value={0}>Homme</Radio>
                <Radio value={1}>Femme</Radio>
              </Space>
            </Radio.Group></div>)
    }
}

export default ImcPanel;
