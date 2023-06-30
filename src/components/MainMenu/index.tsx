import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Page1', '/page1', <PieChartOutlined/>),
    getItem('Page2', '/page2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];

const MainMenu = () => {
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState([""]);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        setOpenKeys([keys[keys.length - 1]])
    };

    const menuClick = (menuItem: { key: string }) => {
        navigate(menuItem.key)
    }
    return (
        <Menu onClick={menuClick} theme="dark" defaultSelectedKeys={['/page1']} mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              items={items}/>
    );
};

export default MainMenu;