import { RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./hook/useAuth";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
// import startTour from "./driverConfig";
import React from "react";
import { mainRoute } from "./route/mainRouter";

let persistor = persistStore(store);

const App = () => {
  // useEffect(() => {
  //   if (!localStorage.getItem("firstVisit")) {
  //     startTour();
  //     localStorage.setItem("firstVisit", "true");
  //   }
  // }, []);
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <RouterProvider router={mainRoute} />
          </AuthProvider>
        </PersistGate>
      </Provider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
