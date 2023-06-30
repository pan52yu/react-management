import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useLocation, useNavigate} from "react-router-dom";

interface MenuItem {
    label: string;
    key: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
}

const items: MenuItem[] = [
    {
        label: 'Page1',
        key: '/page1',
        icon: <PieChartOutlined/>,
    },
    {
        label: 'Page2',
        key: '/page2',
        icon: <DesktopOutlined/>,
    },
    {
        label: 'User',
        key: 'sub1',
        icon: <UserOutlined/>,
        children: [
            {
                label: 'Tom',
                key: '/page3/page301',
            },
            {
                label: 'Bill',
                key: '4',
            },
            {
                label: 'Alex',
                key: '5',
            },
        ],
    },
    {
        label: 'Team',
        key: 'sub2',
        icon: <TeamOutlined/>,
        children: [
            {
                label: 'Team 1',
                key: '6',
            },
            {
                label: 'Team 2',
                key: '8',
            }
        ],
    },
    {
        label: 'Files',
        key: '9',
        icon: <FileOutlined/>,
    }
];

const MainMenu = () => {
    const navigate = useNavigate();
    const route = useLocation();

    const defaultOpenKeys: string = items.find(item => item?.children?.find(child => child.key === route.pathname))?.key || '';

    // 默认展开的菜单项
    const [openKeys, setOpenKeys] = useState([defaultOpenKeys]);

    // 菜单展开收起时触发
    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        setOpenKeys([keys[keys.length - 1]])
    };

    // 菜单点击时触发
    const menuClick = (menuItem: { key: string }) => {
        navigate(menuItem.key)
    }

    console.log(useLocation())
    return (
        <Menu
            onClick={menuClick}
            theme="dark"
            defaultSelectedKeys={[route.pathname]}
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
        />
    );
};

export default MainMenu;