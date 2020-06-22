import React from 'react'
import { Input, Form, Button, Card, message, Icon, Checkbox, Select, Switch, DatePicker, TimePicker, Radio, Upload, InputNumber } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea
const rowObject = {
    minRows:4,
    maxRows:6
}
class Register extends React.Component {
    state={}
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      
    beforeUpload=(file)=> {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world. 这里改成 获取服务端返回的url地址 放进要展示的图片url中
          this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              userImg:imageUrl,
              loading: false,
            }),
          );
        }
      };
      handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，注册成功，当前密码为：${userInfo.userPwd}`)
      }
      handleReset = ()=>{
        this.props.form.resetFieldsValue();
      }
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24, //小于576像素时
                sm: 4,
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "用户名不能为空"
                                        }
                                    ]
                                })(
                                    <Input placeholder="用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            message: "密码不能为空"
                                        }
                                    ]
                                })(
                                    <Input type="password" placeholder="密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18'
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1'
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华房子</Option>
                                        <Option value="3">北大才子</Option>
                                        <Option value="4">百度FE</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2','5']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">跑步</Option>
                                        <Option value="5">爬山</Option>
                                        <Option value="6">骑行</Option>
                                        <Option value="7">桌球</Option>
                                        <Option value="8">麦霸</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName:'checked',
                                    initialValue: true,
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2019-06-23'),
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '北京市海淀区奥林匹克花园'
                                })(
                                    <TextArea
                                    autoSize={
                                        rowObject
                                    }
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    initialValue: moment('2019-06-23'),
                                })(
                                    <TimePicker
                                        
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="//www.mocky.io/v2/5cc8019d300000980a055e76"
                                    onChange={this.handleChange}
                                    >
                                        {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus" />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                getFieldDecorator('userImg')(
                                    <Checkbox>我已阅读过<a href="#">用户协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                            &nbsp;&nbsp;
                            <Button onClick={this.handleReset}>重置</Button>
                        </FormItem>
                        
                    </Form>

                </Card>
            </div>
        )
    }
}
export default Form.create()(Register)