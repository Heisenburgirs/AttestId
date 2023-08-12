import { useState, useEffect } from "react";
import VerifyWorldId from "../widget/worldId";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const Main = () => {

  return (
    <div className="w-full px-8 py-4">
      <VerifyWorldId />
    </div>
  );
}