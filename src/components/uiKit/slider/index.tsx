import { useFormContext } from "react-hook-form";

interface SliderProps {
  min: string;
  max: string;
  name: string;
  minLabel?: string;
  maxLabel?: string;
}
export const Slider = (props: SliderProps) => {
  const methods = useFormContext();

  methods.register(props.name);

  return (
    <div className="w-full bg-ligth-neutral-bg-medium p-4">
      <input
        className="w-full"
        type="range"
        name={props.name}
        min={props.min}
        max={props.max}
        value={methods.getValues(props.name)}
        onChange={(value) =>
          methods.setValue(props.name, value.target.value, {
            shouldValidate: true,
          })
        }
      />
      <div className="w-full justify-between flex">
        <div className="fle flex-col ">
          <p>{props.min}</p>
          <p>{props.minLabel}</p>
        </div>
        <>
          <p>{methods.watch(props.name)}</p>
        </>
        <div className="fle flex-col text-right">
          <p>{props.max}</p>
          <p>{props.maxLabel}</p>
        </div>
      </div>
    </div>
  );
};
