import { useFormStatus } from "react-dom";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

export default function SubmitButton({ children, className, ...rest }) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...rest}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4
        ${className} 
        `}
    >
      {children}
      {pending && <SpinnerMini />}
    </Button>
  );
}
