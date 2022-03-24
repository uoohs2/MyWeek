import React from "react";
import { Route, Switch } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

function App() {
  React.useEffect(async () => {
    // console.log(db);
    // const query = await.getDocs(collection(db, "myWeek"));
    // console.log(query);
    addDoc(collection(db, "myWeeks"), { text: "new", completed: false });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:today">
          <Detail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
