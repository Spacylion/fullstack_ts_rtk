import Form from "../../shared/ui/Form.tsx";
import {Input} from "../../shared/ui/Input.tsx";
import FileInput from "../../shared/ui/FileInput.tsx";
import Button from "../../shared/ui/Button.tsx";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {createCabin} from "../../shared/api/apiCabins.ts";
import FormRow from "../../shared/ui/FormRow.tsx";
import Textarea from "../../shared/ui/Textarea.tsx";


function CreateCabinForm() {
    const queryClient = useQueryClient()
    const {
        register, handleSubmit,
        reset, getValues, formState
    } = useForm()

    const {errors} = formState

    const {mutate, isLoading: isCreating} = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success('New cabin successfully created')
            queryClient.invalidateQueries({queryKey: ['cabins']})
            reset()
        },
        onError: (error) => toast.error(error.message)
    })

    function onSubmit(data) {
        mutate(data)
    }

    function onError(errors) {
        console.log(errors)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRow label='Cabin name' error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    disabled={isCreating}
                    {...register('name', {required: 'This field is required'})}
                />
            </FormRow>
            <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
                <Input
                    type="text"
                    disabled={isCreating}
                    id="maxCapacity"
                    {...register('maxCapacity', {required: 'This field is required'})}
                />
            </FormRow>
            <FormRow label='Regular price' error={errors?.regularPrice?.message}>
                <Input
                    type="text"
                    id="regularPrice"
                    disabled={isCreating}
                    {...register('regularPrice', {required: 'This field is required'})}
                />
            </FormRow>
            <FormRow label='Discount' error={errors?.discount?.message}>
                <Input
                    type="text"
                    id="discount"
                    disabled={isCreating}
                    {...register('discount', {required: 'Discount should be less then regular price'})}
                />
            </FormRow>
            <FormRow label='Description for website' error={errors?.description?.message} disabled={isCreating}>
                <Textarea
                    type="text"
                    id="description"
                    disabled={isCreating}
                    {...register('description', {required: 'This field is required'})}
                />
            </FormRow>
            <FormRow label='Cabin photo'>
                <FileInput id="image" accept="image/*"/>
            </FormRow>
            <FormRow>
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button disabled={isCreating}>Add cabin</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
