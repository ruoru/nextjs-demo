import Header from "./Header";

const Layout = props => (
  <div className="app">
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.9.1/antd.min.css"
    />
    <Header />
    {props.children}
  </div>
);

export default Layout;