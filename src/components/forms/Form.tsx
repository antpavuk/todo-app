import React, {
  Children,
  cloneElement,
  FC,
  FormEventHandler,
  JSXElementConstructor,
  ReactElement,
  useCallback,
} from "react";
import { useState } from "react";
import SubmitButton from "./buttons/SubmitButton";

type FormDataType = {
  [name: string]: any;
};

interface IProps {
  title: string;
  initialState: any;
  onSubmit(formData: FormDataType): void;
}

const Form: FC<IProps> = ({
  title,
  initialState: initialFormDataState,
  onSubmit,
  children,
}) => {
  type State = Readonly<typeof initialFormDataState>;
  const [formData, setFormData] = useState<State>(initialFormDataState);

  const handleOnChange = useCallback(
    ({ target: { name, value, type, checked } }) => {
      setFormData(prevData => ({
        ...prevData,
        [name]: type !== "chechbox" ? value : checked,
      }));
    },
    []
  );

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();

      onSubmit(formData);
    },
    [formData, onSubmit]
  );

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-title">
        <h1>{title}</h1>
      </div>
      <div className="form-body">
        {Children.map(
          children as ReactElement<any, string | JSXElementConstructor<any>>,
          (child, i) => {
            if (child) {
              return cloneElement(
                child as ReactElement<any, string | JSXElementConstructor<any>>,
                {
                  onChange: handleOnChange,
                  value: formData[`${child.props.name}`],
                  key: child.props.id,
                }
              );
            }
          }
        )}
        <SubmitButton />
      </div>
    </form>
  );
};

export default Form;
