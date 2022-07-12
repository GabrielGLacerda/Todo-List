import React from "react";
import { IFormInputs } from "../types/types";
import { useForm } from "react-hook-form";
import api from '../configApi'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputError from "./InputError";

const schema = yup.object({
  text: yup.string().required()
}).required();

export default function TodoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInputs) => {
    api.post<IFormInputs[]>('/todos', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("text", {required: true})} placeholder='Insira a tarefa de hoje'  />
      <button type="submit" >Criar</button>
      {errors.text && <InputError/>}
    </form>
  );
}
