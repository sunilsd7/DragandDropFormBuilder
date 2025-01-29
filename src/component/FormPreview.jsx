import React from 'react';

const FormPreview = ({ fields, register, errors }) => {
  return (
    <div className="space-y-4">
      {fields.map((field, index) => {
        return (
          <div key={index} className="mb-4">
            {field.type === 'text' || field.type === 'email' || field.type === 'password'  || field.type === 'number' || field.type === 'textarea' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                <input
                  {...register(field.name)}
                  type={field.type}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors[field.name] && <span className="text-red-500 text-sm">{errors[field.name]?.message}</span>}
              </div>
            ) : null}

            {field.type === 'radio' && field.options && (
              <div>
                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                {field.options.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <input {...register(field.name)} type="radio" value={option} />
                    <span>{option}</span>
                  </div>
                ))}
                {errors[field.name] && <span className="text-red-500 text-sm">{errors[field.name]?.message}</span>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FormPreview;