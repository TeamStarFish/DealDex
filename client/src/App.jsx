import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./container/Main.jsx";
import { Header } from "./Header.jsx";

export default function App() {
  //navbar above h1
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <main className='flex flex-col h-screen '>
              <Header />
              {/* <div className='flex items-center justify-center'>
                <p className='text-2xl text-center font-bold'>
                  <strong>DealDex we find the best deal</strong>
                </p>
              </div> */}
              <Main />
            </main>
          }
        />

        {/* <Route path={'/login'} element = {
            <main>
              <Header />
              <LoginPage />

            </main>
           } />
          <Route path={'/register'} element = {
            <main>
              <Header />
              <RegisterPage />

            </main>
           } />
          <Route path={'/meme'} element={
          <main>
            <Header />
            <p className="flex items-center justify-center"><strong>You can do it</strong></p>
            <img className="flex items-center justify-center" src={Shrek}/>
          </main>} /> */}
      </Routes>

      {/* <Routes>

          <Route index element={<></>} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/login'} element={<LoginPage />} />
 
        </Routes> */}
    </div>
  );
}
