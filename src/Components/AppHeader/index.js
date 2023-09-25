import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders, getCustomers } from "../../API";

function AppHeader() {
  // const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  // const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userOpen, setuserOpen] = useState(false);

  useEffect(() => {
    // getComments().then((res) => {
    //   setComments(res.comments);
    // });
    getOrders().then((res) => {
      setOrders(res.products);
    });
    // getCustomers().then((res) => {
    //   setUsers(res.users);
    // });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={90} 
        src="data:image/png;base64,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"
      ></Image>
       <Space>
        {/* // <Badge count={comments.length} dot>
        //   <MailOutlined */}
        {/* //     style={{ fontSize: 24 }}
        //     onClick={() => { */}
        {/* //       setCommentsOpen(true);
        //     }}
        //   />
        // </Badge> */}

        {/* <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge> */}
        <Badge>
          <UserOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setuserOpen(true);
            }}
          />
        </Badge>
      </Space>
      {/* <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List> */}
      {/* </Drawer>  */}
      <button class="button">Logout</button>
      {/* <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has 
                 messaged you
              </List.Item>
            );
          }}
        ></List>
      </Drawer> */}
      <Drawer
        title="Profile"
        open={userOpen}
        onClose={() => {
          setuserOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={users}
          renderItem={(item) => {
            return (
              <Typography.Text strong>{item.firstName}</Typography.Text> 
              // <List.Item>
              //   <Typography.Text strong>{item.firstName}</Typography.Text> has 
              //    messaged you
              // </List.Item>
            );
          }}
        ></List>
      </Drawer>
      {/* <button class="button">Logout</button> */}
    </div>
  );
}
export default AppHeader;
