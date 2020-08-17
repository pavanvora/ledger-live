// @flow
import type { OperationType } from "@ledgerhq/live-common/lib/types";
import React from "react";
import OperationStatusWrapper from "./Wrapper";
import Plus from "../Plus";

export default ({
  confirmed,
  failed,
  size = 24,
  type,
}: {
  confirmed?: boolean,
  failed?: boolean,
  size?: number,
  type: OperationType,
}) => {
  return (
    <OperationStatusWrapper
      size={size}
      Icon={Plus}
      confirmed={confirmed}
      failed={failed}
      type={type}
    />
  );
};
