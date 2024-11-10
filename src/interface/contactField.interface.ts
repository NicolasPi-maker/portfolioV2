export interface ContactFieldInterface {
  name: string;
  value: HTMLInputElement;
  errorMessages: {
    required: string;
    invalid: string;
  };
}