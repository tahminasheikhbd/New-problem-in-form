/** @format */
import { HiCheck } from "react-icons/hi";
import React from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
const formSchema = z.object({
  name: z.string({ required_error: "*" }).min(3, "Name is required"),
});

const FormNumber2 = () => {
  const {
    watch,

    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  console.log({ errors });

  return (
    <div className='flex items-center justify-center min-h-screen bg-pink-400 py-10 '>
      <div className='bg-teal-200  rounded-md border border-teal-600 flex flex-col gap-6 p-10'>
        <div>
          <h1 className='text-teal-600 font-medium  text-3xl mb-3'>
            Cat Adoption Application Form
          </h1>
          <span className='block w-full mx-auto max-w-[110%]  border border-teal-600 border-double'></span>
        </div>
        <form
          action=''
          className='grid  space-y-8'
          onSubmit={handleSubmit(onSubmit)}>
          {/* name-sample-start */}
          {/* <div className='space-y-1'>
            <div className='flex gap-2'>
              <label htmlFor='' className='text-teal-600 text-lg font-medium'>
                Name of the cat you want to adopt
              </label>
              {errors?.["name"] && (
                <p className='text-[red] font-bold text-2xl'>
                  {errors?.["name"]?.message}
                </p>
              )}
            </div>
            <input
              type='text'
              className='w-full p-[10px] border-2 border-teal-600 outline-none  rounded-md text-teal-700 text-xl'
              {...register("name")}
            />
          </div> */}
          {/* name-sample-end */}
          <Controller
            name='name'
            control={control}
            render={({ field, fieldState: { error } }) => {
              console.log({ error });

              return (
                <div className='space-y-1'>
                  <div className='flex gap-2'>
                    <label
                      htmlFor='name'
                      className='text-teal-600 text-lg font-medium'>
                      Name of the cat you want to adopt
                    </label>
                    {error && (
                      <p className='text-[red] font-bold text-2xl'>
                        {error.message}
                      </p>
                    )}
                  </div>

                  <input
                    id='name'
                    type='text'
                    {...field}
                    className='w-full p-[7px] border-2 border-teal-600 outline-none  rounded-md text-teal-700 text-xl'
                  />
                </div>
              );
            }}
          />

          <InputFeild1
            name='name'
            control={control}
            label=' Name of the cat you want to adopt'
            htmlFor='petName'
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormNumber2;

const InputFeild1 = (
  name,
  label,
  type = "text",
  placeholder,
  htmlFor,
  control
) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        console.log({ error });

        return (
          <div className='space-y-1'>
            <div className='flex gap-2'>
              <label
                htmlFor={htmlFor}
                className='text-teal-600 text-lg font-medium'>
                {label}
              </label>
              {error && (
                <p className='text-[red] font-bold text-2xl'>{error.message}</p>
              )}
            </div>

            <input
              id={htmlFor}
              type={type}
              {...field}
              placeholder={placeholder || `Enter your ${label?.toLowercase()}`}
              className='w-full p-[7px] border-2 border-teal-600 outline-none  rounded-md text-teal-700 text-xl'
            />
          </div>
        );
      }}
    />
  );
};

{
  /* checkbox-start */
}
{
  /* <div>
            <div className=' flex items-center gap-2'>
              <input
                type='checkbox'
                {...register("courses")}
                id='124'
                value='app'
                hidden
              />

              <label
                htmlFor='124'
                className='size-5 border border-teal-600 rounded-md grid place-items-center text-xl text-white bg-white'>
                {watch("courses")?.some((data) => data == "app") && <HiCheck />}
              </label>

              <label
                htmlFor='124'
                className='text-teal-600 text-lg font-medium'>
                app development
              </label>
            </div>
          </div>

          <div className=' flex items-center gap-2'>
            <input
              type='checkbox'
              {...register("courses")}
              id='124'
              value='app'
              hidden
            />

            <label
              htmlFor='124'
              className='size-5 border border-teal-600 rounded-md grid place-items-center text-xl text-white bg-white'>
              {watch("courses")?.some((data) => data == "app") && <HiCheck />}
            </label>

            <label htmlFor='124' className='text-teal-600 text-lg font-medium'>
              app development
            </label>
          </div> */
}
{
  /* checkbox-end*/
}
