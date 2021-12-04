import React, {useEffect, useState} from "react";
import 'antd/dist/antd.css';
import '../../App.css';
import { Layout, Menu, Row, Col, List, Typography, Divider, Avatar } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { DoughnutChart } from "../Chart/DoughnutChart";
import { Link } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;


export const Home = () => {
  const [listData, setListData] = useState([{'name': 'Click on the the chart to see colleges by states.'}]);

    return (
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                  nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                  nav 3
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 14, minHeight: 360 }}>
                  <div className="chart" style={{width: "100%"}} >
                    <Row>
                      <Col span={18}>
                        <DoughnutChart
                          setListData={setListData}
                        />
                      </Col>
                      <Col span={6} style={{borderStyle: "solid"}} >
                      <List
                        itemLayout="horizontal"
                        dataSource={listData}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              title={<Link to={"/college/"+item.id}>{item.name}</Link>}
                            />
                          </List.Item>
                        )}
                      />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Engineering Colleges of India</Footer>
            </Layout>
          </Layout>
    );
}
