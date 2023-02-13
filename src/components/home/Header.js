import { Stack } from "@mui/material";
import Button from "../../UI/Button";
import Paypal from "../../assets/paypal.svg";

const Header = () => {
  return (
    <nav className="h-24 flex justify-between">
      <div className="m-2 basis-1/4">
        <img src={Paypal} alt="logo" className="w-logo ml-16 mt-3 " />
      </div>
      <div className="m-2 ml-48 h-auto basis-1/2">
        <h1 className="text-lg font-medium tracking-wide uppercase mt-4 ml-16 ">
          Personal
        </h1>
      </div>
      <div className="my-2 mr-16 basis-1/6">
        <Stack mt={2} spacing={2} direction="row">
          <Button
            className="text-sm text-blue-800 tracking-wide px-3 w-24 h-8 rounded-2xl border-solid border-2 border-blue-800"
            text="Log In"
          />
          <Button
            className="text-sm text-white tracking-wide px-3 w-24 h-8 rounded-2xl border-solid bg-blue-800"
            text="Sign Up"
          />
        </Stack>
      </div>
    </nav>
  );
};

export default Header;
