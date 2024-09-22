import { persistor } from "../Store/Store/Store";


export const handleResetStore = () => {
  persistor.purge(); 
  window.location.href = '/';

}
