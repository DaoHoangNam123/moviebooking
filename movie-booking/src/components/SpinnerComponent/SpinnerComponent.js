import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
export default function SpinnerComponent() {
  let isLoading = useSelector((state) => state.spinnerReducer.isLoading);

  return isLoading ? (
    <div className="h-screen fixed w-screen z-50 flex justify-center items-center bg-white">
      <HashLoader size={100} color={"#FF9F29"} />
    </div>
  ) : (
    <></>
  );
}
