import ReactDOM from "react-dom";
import React, { useEffect } from "react";

export default function PopupPortal({ children }) {
    useEffect(() => {
        // 팝업 열릴 때 스크롤 막기
        document.body.style.overflow = "hidden";
        // 컴포넌트 언마운트 시 스크롤 복구
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const el = document.getElementById("popup-root");
    return ReactDOM.createPortal(children, el);
}