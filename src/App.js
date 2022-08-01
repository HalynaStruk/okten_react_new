import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {AboutPage, HomePage, NotFoundPage, PostPage, SinglePostPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'/home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'posts'} element={<PostPage/>}>
                  <Route path={':id'} element={<SinglePostPage/>}/>
              </Route>
              <Route path={'about'} element={<AboutPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
        </Routes>
    );
};

export default App;