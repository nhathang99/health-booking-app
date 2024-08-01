import React from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldTypes } from "../forms/PatientForm";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldTypes;
  name: string;
  label: string;
  placeholder?: string;
  iconSrc?: string;
  disabled?: boolean;
  dateFormat?: string[];
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSekeleton?: (filed: any) => React.ReactNode;
}
const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, iconSrc, placeholder } = props;
  switch (props.fieldType) {
    case FormFieldTypes.INPUT:
      return (
        <div className="flex border border-dark-300 border-blue-700 rounded-lg">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt="icon"
              className=" ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className=" placeholder:text-dark-600 rounded-lg border-dark-500 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
            ></Input>
          </FormControl>
        </div>
      );
    case FormFieldTypes.PHONE_INPUT:
      return (
        <div>
          <FormControl>
            <PhoneInput
              defaultCountry="VN"
              placeholder={props.placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className="mt-2 h-11 rounded-md px-3 text-sm border placeholder:text-dark-600 border-dark-500 outline-none "
            />
          </FormControl>
        </div>
      );
  }
};
const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldTypes.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage className=" text-red-400 " />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
