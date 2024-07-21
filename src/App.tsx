import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./route/mainRouter";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { PersistGate } from "redux-persist/integration/react";
let persistor = persistStore(store);
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={mainRoute} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
