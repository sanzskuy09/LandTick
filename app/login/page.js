"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]);

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input Field for Name */}
        <Input
          {...register("name", { required: "Name is required" })}
          label="Name"
          placeholder="Enter your name"
          clearable
        />
        {/* Error Message for Name */}
        {errors.name && <p>{errors.name.message}</p>}

        {/* Input Field for Email */}
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Entered value does not match email format",
            },
          })}
          label="Email"
          placeholder="Enter your email"
          clearable
        />
        {/* Error Message for Email */}
        {errors.email && <p>{errors.email.message}</p>}

        <p>{data}</p>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
