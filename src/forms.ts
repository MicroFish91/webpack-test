export const formData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll("input");
  const values: { [props: string]: string } = {};

  inputs.forEach((input) => {
    values[input.id] = input.value;
  });

  return values;
};
