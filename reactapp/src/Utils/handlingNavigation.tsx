import { NavigateFunction } from "react-router-dom";

const handlingNavigation = (path: any, navigate: NavigateFunction) => {
    navigate(path);
};

export default handlingNavigation;