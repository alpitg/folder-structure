import { useState, Suspense, useEffect } from "react";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import SidebarApp from "../../components/ui/sidebar/sidebar";
import NavbarApp from "../../components/ui/navbar/navbar";
import AuthResolver from "../../components/auth/auth.resolver";
import { fetchPagesRequest } from "../../store/actions/pages.action";
import { fetchActionsRequest } from "../../store/actions/actions.action";
import { LOADING } from "../../constants/global-contants/global-key.const";

const BaseLayoutApp = () => {
  const [isOpenSideBar, setIsOpenSidebar] = useState<boolean>(true);
  const dispatch = useDispatch();

  const onToggleSidebar = () => {
    setIsOpenSidebar(!isOpenSideBar);
  };

  useEffect(() => {
    dispatch(fetchPagesRequest());
    dispatch(fetchActionsRequest());
  }, []);

  return (
    <AuthResolver>
      <div className="base-layout-app">
        <span
          className={
            "toggle-button svg-icon svg-icon-2 " +
            (!isOpenSideBar
              ? "rotate-180 toggle-button-location-180"
              : "toggle-button-location-0")
          }
          onClick={onToggleSidebar}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
              fill="currentColor"
            ></path>
            <path
              d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>

        <NavbarApp isOpenSideBar={isOpenSideBar} />
        <div
          className={
            "base-layout-main-body " +
            (isOpenSideBar ? "sidebar-opened" : "")
          }
        >
          <div className="base-layout-sidebar">
            {isOpenSideBar && <SidebarApp />}
          </div>
          <div className="base-layout-content">
            <Suspense fallback={<div>{LOADING}</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </AuthResolver>
  );
};

export default BaseLayoutApp;
