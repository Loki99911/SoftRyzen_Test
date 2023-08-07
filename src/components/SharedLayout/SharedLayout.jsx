import { HeaderComp } from "components/HeaderComp/HeaderComp"
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, MainBg } from "./SharedLayout.styled";

export const SharedLayout = ({children}) => {
    return (
      <>
        <HeaderComp />
        <MainBg>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </MainBg>
      </>
    );
}