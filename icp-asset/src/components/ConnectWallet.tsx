import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface IProps extends ButtonProps { }

export default function ConnectWallet({ ...props }: IProps) {
  const handleConnect = async () => {
  };
  return (
    <Button
      {...props}
      variant="primary"
      borderRadius="5px"
      bg="transparent"
      border="1px solid #f6e6b7"
      color="#f6e6b7"
      padding="10px 25px !important"
      fontSize="12px"
      onClick={handleConnect}
    >
      Connect Wallet
    </Button>
  );
}
