import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldTemplateSelector from './FieldTemplateSelector';
import DropArea from './DropArea';
import FormPreview from './FormPreview';

// Zod Schema for form validation
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  gender: z.string().min(1, 'Gender is required'),
  age: z.number().min(1, 'Age is required').max(100, 'Age must be less than 100'),
  address: z.string().min(1, 'Address is required'),
});

const FormBuilder = () => {
  const [fields, setFields] = useState([]);
  
  // React Hook Form with Zod validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const addField = (field) => {
    setFields((prevFields) => [...prevFields, field]);
  };

  const onSubmit = (data) => {
    console.log("Submited data:",data);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex space-x-6">
        <div className="w-1/4">
          {/* FieldTemplateSelector for selecting field types */}
          <FieldTemplateSelector onSelectTemplate={addField} />
        </div>
        <div className="w-3/4">
          {/* DropArea for managing the form fields */}
          <DropArea fields={fields} setFields={setFields} />
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* FormPreview to display form fields and errors */}
            <FormPreview fields={fields} register={register} errors={errors} />

            <div className="flex justify-center mt-6">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;