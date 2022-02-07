import { useState, useContext } from 'react';
import Context from '../../utils/Context';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Background } from '../../globalStyles';

import {
  CreateSec,
  CreateContainer,
  CreateTitle,
  CreateForm,
  CreateFormGroup,
  CreateLabel,
  CreateInput,
} from './Create.styles';

type CreateSubmitForm = {
  contentURL: string;
};

const Create = () => {
  const { connector } = useContext(Context);

  const validationSchema = Yup.object().shape({
    contentURL: Yup.string().required('Content URL is required'),
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <Background>
      <CreateSec>
        <CreateContainer>
          <CreateTitle>Create New Item</CreateTitle>
          <CreateForm>
            <CreateFormGroup>
              <CreateLabel htmlFor="content-url">Content URL</CreateLabel>
              <CreateInput type="text" id="text" {...register('contentURL')} />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="name">Name</CreateLabel>
              <CreateInput type="text" id="text" {...register('name')} />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="description">Description</CreateLabel>
              <CreateInput type="text" id="text" {...register('description')} />
            </CreateFormGroup>
          </CreateForm>
        </CreateContainer>
      </CreateSec>
    </Background>
  );
};

export default Create;
