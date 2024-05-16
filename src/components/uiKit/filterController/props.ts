export interface FilterControllerProps {
  onClose?: () => void;
  filter: { [key: string]: string | string[] };
}
