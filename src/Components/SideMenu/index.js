import {
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
            {
            label: "Home",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Make Announcements",
            icon: <AppstoreOutlined />,
            key: "/makeannouncement",
          },
          {
            label: "Use Group Chat",
            key: "/usegroupchat",
            icon: <AppstoreOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;