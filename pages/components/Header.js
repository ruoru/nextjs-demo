import Link from "next/link";
import { Layout, Menu } from "antd";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Layout.Header className="header" style={{ backgroundColor: "rgba(79,204,205,.4)" }}>
      <div className="logo" />
      <Menu
        className="menu"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>

    </Layout.Header>

    <style jsx>{`
      .header .menu {
        background-color: rgba(0, 0, 0, 0);
      }
    `}</style>
  </div>


  // <div>
  //   <Link href="/">
  //     <a style={linkStyle}>Home</a>
  //   </Link>
  //   <Link href="/about">
  //     <a style={linkStyle}>About</a>
  //   </Link>
  // </div>
);

export default Header;
