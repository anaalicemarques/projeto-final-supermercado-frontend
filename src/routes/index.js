import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CadastroProduto from "../pages/Home/CadastroProduto";
import AtualizarProduto from "../pages/Home/AtualizarProduto/index";
import RemoverProduto from "../pages/Home/RemoverProduto/index";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/CadastroProduto" element={<CadastroProduto />} />
          <Route path="/AtualizarProduto" element={<AtualizarProduto />} />
          <Route path="/RemoverProduto" element={<RemoverProduto />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;