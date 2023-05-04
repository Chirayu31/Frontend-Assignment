import { useForm } from 'react-hook-form';
import InputField from "../components/InputField";
import RadioField from "../components/RadioField";
import SelectField from "../components/SelectField";
import SwitchField from '../components/SwitchField';
import GroupField from '../components/GroupField';
import { useState } from 'react';


const RenderedForm = ({ data, setSubmittedData }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ shouldUnregister: true });

    const [showOpt, setShowOpt] = useState(false)

    function generateForm(schema, showAdv, setShowAdv, parentPath = '') {
        const fields = []
        const sortedSchema = [...schema].sort((a, b) => a.sort - b.sort);
        let optional = false;

        sortedSchema.forEach((field) => {
            const fieldProps = {
                name: parentPath ? `${parentPath}.${field.jsonKey}` : field.jsonKey,
                placeholder: field?.placeholder,
                register: register,
                disabled: field?.validate?.immutable || false,
                required: field?.validate?.required || false,
                pattern: field?.validate?.pattern || false,
                description: field?.description,
                options: field?.validate?.options,
                defaultValue: field?.validate?.defaultValue
            };

            if (!fieldProps.required)
                optional = true

            if (!showAdv && !fieldProps.required) return;

            switch (field.uiType) {
                case 'Input':
                    fields.push(<>
                        <InputField key={field.jsonKey} label={field.label} fieldProps={fieldProps} />

                    </>
                    )
                    break;
                case 'Group':
                    fields.push(
                        <GroupField
                            subParameters={field.subParameters}
                            label={field.label}
                            fieldProps={fieldProps}
                            generateForm={generateForm}
                            key={field.jsonKey}
                        />
                    )
                    break;
                case 'Radio':
                    fields.push(
                        <fieldset key={field.jsonKey} className='flex border p-4 border-gray-700 justify-between	m-8'>
                            <RadioField label={field.label} fieldProps={fieldProps} />
                        </fieldset>
                    )
                    break;
                case 'Select':
                    fields.push(
                        <fieldset className='flex justify-between my-4 mx-8' key={field.jsonKey}>
                            <SelectField label={field.label} fieldProps={fieldProps} />
                        </fieldset>
                    )
                    break;
                case 'Ignore':
                    let ans = true;
                    field.conditions.map(condition => {
                        if (watch(condition.jsonKey) !== condition.value) {
                            ans = false;
                        }
                    })

                    if (ans) {
                        fields.push(
                            <GroupField
                                subParameters={field.subParameters}
                                label={field.label}
                                fieldProps={fieldProps}
                                generateForm={generateForm}
                                key={field.jsonKey}
                            />
                        )
                    }

                    break;
                case 'Switch':
                    fields.push(
                        <SwitchField key={field.jsonKey} label={field.label} fieldProps={fieldProps} />
                    )
                    break;
            }
        })

        if (optional)
            fields.push(
                <fieldset className='flex gap-2 mx-8 my-2'>
                    <input
                        type='checkbox'
                        name='Show Advance'
                        checked={showAdv}
                        onChange={() => setShowAdv(!showAdv)}
                    />
                    <label className='text-white flex'>Show Advance Fields</label>
                </fieldset>
            )

        return fields
    }

    const onSubmit = (data) => {
        setSubmittedData(data)
    }

    return (
        <>
            {data && data.length > 0 ?
                (
                    <form className='border m-2 border-gray-600' onSubmit={handleSubmit(onSubmit)}>
                        {generateForm(data, showOpt, setShowOpt)}
                        <fieldset className='flex justify-center mb-10'>
                            <input
                                type='submit'
                                className='mt-8 border-2 text-yellow-500 font-bold border-yellow-400 cursor-pointer hover:border-yellow-500 w-36 p-2 rounded'
                            />
                        </fieldset>
                    </form>
                ) :
                (<></>)
            }
        </>
    )
}

export default RenderedForm;