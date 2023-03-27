import { Helmet } from "react-helmet";
import { BasicTabs } from "./tab";
import "./admin.css";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <BasicTabs></BasicTabs>
    </>
  );
}
