import React from "react";
import Header from "../common/Header";
import UserPanelMobile from "./UserPanelMobile";
import UserPanelDesktop from "./UserPanelDesktop";





const UserPanel = () => {
    return(
        <>
        <Header />
        <UserPanelMobile />
        <UserPanelDesktop />
        </>
    )
}

export default UserPanel;