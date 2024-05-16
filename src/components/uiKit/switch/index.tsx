import { Switch } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
interface SimpleSwitchProps {
  name: string;
}
export const SimpleSwitch = ({ name }: SimpleSwitchProps) => {
  const methods = useFormContext();
  const value = methods.watch(name);
  
  methods.register(name);
  return (
    <Switch
      checked={value}
      type='button'
      onChange={(state) => methods.setValue(name, state, {shouldValidate: true})}
      className={`${
        value ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <>
        <span
          className={`${
            value ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </>
    </Switch>
  );
};
