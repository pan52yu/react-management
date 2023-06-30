import {Menu, MenuProps} from "antd";
import {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

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
    const [openKeys, setOpenKeys] = useState([""]);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        setOpenKeys([keys[keys.length - 1]])
    };

    const menuClick = (menuItem: { key: string }) => {
        navigate(menuItem.key)
    }
    return (
        <Menu
            onClick={menuClick}
            theme="dark"
            defaultSelectedKeys={['/page1']}
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
        />
    );
};

export default MainMenu;