import { useFormContext } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { FilterControllerProps } from "./props";
import { FilterButtonContainer } from "./style";

/**
 * - if dont pass @filterValue the component indefie this with exclude all
 * **/

export const FilterController: React.FC<FilterControllerProps> = ({
  onClose,
  filter,
}) => {
  const methods = useFormContext();
  const clearAll = () => {
    methods.reset();
    onClose && onClose();
  };
  const clearOne = (status: string) => {
    methods.resetField(status);
    onClose && onClose();
  };

  const transformValueToKey = Object.keys(filter);
  return (
    <>
      {transformValueToKey.map((key) => {
        const convertCammelCaseToSpace = key
          .replace(/([A-Z])/g, " $1")
          .trim()
          .toLowerCase();

        const treatValue =
          typeof filter[key] === "string"
            ? filter[key]
            : Array(filter[key]).join(",").toLowerCase();

        return (
          <FilterButtonContainer
            isClearAll
            type="button"
            onClick={() => clearOne(key)}
          >
            {convertCammelCaseToSpace}: {treatValue}
          </FilterButtonContainer>
        );
      })}

      {Object.values(filter).length > 0 && (
        <FilterButtonContainer type="submit" onClick={clearAll}>
          Clear All
          <AiOutlineClose />
        </FilterButtonContainer>
      )}
    </>
  );
};
