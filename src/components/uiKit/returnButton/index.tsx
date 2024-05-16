import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";



export const ReturnButton = ({ children, onClick = null, ...rest }: any) => {
  const navigate = useNavigate();
  const onReturnButtonClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <Button variant="filled" color="terthiary" onClick={onClick || onReturnButtonClick} {...rest}>
      {children}
    </Button>
  )
}