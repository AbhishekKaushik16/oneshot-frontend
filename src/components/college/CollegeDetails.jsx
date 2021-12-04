import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getCollegeData } from '../../api';

import 'antd/dist/antd.css';
import { Layout, Menu, Typography } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


export const CollegeDetails = () => {
    const [collegeData, setCollegeData] = React.useState({});
    const { id } = useParams();
    useEffect(() => {
        getCollegeData(id).then(res => {
            console.log(res.data);
            setCollegeData(res.data);
        });
    }, [id]);
    return (
        <div>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Typography>College Name: {collegeData.name}</Typography>
                    <Typography>Year Founded: {collegeData.year_founded}</Typography>
                    <Typography>City: {collegeData.city}</Typography>
                    <Typography>State: {collegeData.state}</Typography>
                    <Typography>Country: {collegeData.country}</Typography>
                    <Typography>Number Of Students: {collegeData.no_of_students}</Typography>
                </div>
            </Content>
        </div>
    )
}
