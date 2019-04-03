import React,{Component} from 'react';//引入react，所有的语法形式都是react控制的
import ReactDOM from 'react-dom';//渲染
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import Home from './containers/Home';
  
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  
  class App extends React.Component{
      render(){
        return(
            <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/lang'>设计语言</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/component'>组件</Link></Menu.Item>
                </Menu>
            </Header>
            <Route path="/home" component={Home} />
            <Route path="/lang" component={Home} />
            <Route path="/comonent" component={Home} />
            <Route exact path="/" render={()=><Redirect to='/home' />} />
            </Layout>
        )
      }
  
}

export default App;
