import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Service() {
  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  const addService = () => {};
  return (
    <div>
      <div className="flex">
        <div
          className="p-4 cursor-pointer"
          onClick={() => {
            setList(true);
            setAdd(false);
          }}
        >
          List
        </div>
        <div
          className="p-4 cursor-pointer"
          onClick={() => {
            setList(false);
            setAdd(true);
          }}
        >
          add
        </div>
      </div>
      {list && <div>list</div>}
      {add && (
        <div>
          <form onSubmit={handleSubmit(addService)}>
            <div className="mb-4">
              <div>Service Title</div>
              <input
                type="text"
                {...register("title", {
                  required: "Please enter title ",
                })}
                placeholder="Service Title"
                autoComplete="off"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />
              {errors.title && (
                <div className="text-red-500">
                  {(errors.title as any).message}
                </div>
              )}
            </div>{" "}
            <div className="mb-4">
              <div>Title</div>
              <input
                type="text"
                {...register("shortDescription", {
                  required: "Please enter short description ",
                })}
                placeholder="Short Description "
                autoComplete="off"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />
              {errors.shortDescription && (
                <div className="text-red-500">
                  {(errors.shortDescription as any).message}
                </div>
              )}
            </div>{" "}
            <div className="mb-4">
              <div>Description</div>
              <textarea
                {...register("description", {
                  required: "Please enter description ",
                })}
                placeholder="Description "
                autoComplete="off"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />
              {errors.description && (
                <div className="text-red-500">
                  {(errors.description as any).message}
                </div>
              )}
            </div>
            <div className="mb-10">
              <input
                type="submit"
                value="Add"
                className="w-full rounded-md border py-3 button-primary text-base cursor-pointer transition"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}