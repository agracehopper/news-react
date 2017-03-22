import React from 'react';
import {Row, Col, Menu, Icon, Modal, Form, Input, Button, message} from 'antd';

let logoImage = require('../images/logo.png');
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

class PCHeader extends React.Component{
	constructor(){
		super();
		this.state = {
		    current: 'home',
		    modalVisible:false,
		    action:'login',
		    hasLogined:false,
		    userNickName:'',
		    userid:0
		}
	}

	handleClick(){

	}

	render(){
		const { getFieldProps } = this.props.form;
		const userShow = this.state.hasLogined
		?
		<Menu.Item key="logout" className="register">
			<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
			<Link target="_blank">
				<Button type="dashed" htmlType="button">个人中心</Button>
			</Link>
			<Button type="ghost" htmlType="button">退出</Button>
		</Menu.Item>
		:
		<Menu.Item key="register" className="register">
			<Icon type="home" />注册/登录
		</Menu.Item>;

		return (
			<header>
				<Row>
			      <Col span={2}></Col>
			      <Col span={4}>
					<a href="/" className="logo">
						<img src={logoImage} alt="logo"/>
						<span>tag show</span>
					</a>
			      </Col>
			      <Col span={16}>
					<Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
						<Menu.Item key="home">
				          <Icon type="home" />Home
				        </Menu.Item>
				        <Menu.Item key="birthday">
				          <Icon type="gift" />Birthday
				        </Menu.Item>
				        <Menu.Item key="card">
				          <Icon type="idcard" />business card
				        </Menu.Item>
				        {userShow}
					</Menu>
					<Modal title="用户中心">
					</Modal>
			      </Col>
			      <Col span={2}></Col>
			      </Row>
			</header>
		)
	}
}

export default PCHeader = Form.create({})(PCHeader);