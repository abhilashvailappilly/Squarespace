import { useSelector, useDispatch } from "react-redux";

export const useStoreHook = () => {

    const pages = useSelector((state) => state.pages);
    const home = useSelector((state) => state.home);

  const dispatch = useDispatch();

  return { pages, home, dispatch };
};
