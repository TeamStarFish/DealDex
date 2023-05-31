import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 150ms;
  transform: translate(-2px, -2px);
  &:hover {
    transform: translate(0, 0);
    box-shadow: 0px 0px;
  }
`;

const ButtonNav = styled.div`
  width: 350px;
  height: 60px;
  border: 2px solid #eee;
  background-color: #b6bdc9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 7px;
`;

const LogIn = styled.div`
  display: flex;
  width: 100px;
  height: 55px;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  background-color: #1859c9;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const SignUp = styled.div`
  display: flex;
  width: 100px;
  height: 55px;
  margin-right: 7px;
  border: none;
  border-radius: 5px;
  background-color: #e9ecf0;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 7px;
`;

export function Header() {
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  // const loginNavStyle = {
  //   marigin: "10px",
  // };
  //   useEffect(() => {
  //     fetch('/login', {
  //       credentials: 'include',
  //     }).then((res) =>
  //       res.json().then((userInfo) => {
  //         setUserInfo(userInfo);
  //       })
  //     );
  //   }, []);

  // function logout() {
  //   fetch('/logout', {
  //     credentials: 'include',
  //     method: 'POST',
  //   });
  //   setUserInfo(null);
  // }

  // const username = userInfo?.username;

  return (
    <div className='bg-white shadow flex justify-between'>
      <Title>
        <header className='flex py-4 ml-4 w-13'>
          <Link to='/' className='mt-1.5'>
            <img
              className='object-scale-down h-11'
              src='https://i.ibb.co/2gxfCKh/owen.png'
              id='owen'
              alt='owen'
              border='0'
            />
          </Link>
          <h1
            className='container flex justify-between items-center py-1 px-1 font-montserrat text-3xl font-bold'
            font-montserrat>
            DealDex
          </h1>
        </header>
      </Title>
      <LogIn>
        <button>login</button>
      </LogIn>
      <SignUp>
        <button>signup</button>
      </SignUp>
    </div>
  );
}
