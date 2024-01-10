import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import styled from "styled-components";

interface IMyForm {
    name: string,
    age: number,
    pl: string
}

const FormWrapper = styled.div`
    margin-top: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background-color: #747bff;
`

const FormComponent = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isValid},
        reset
    } = useForm<IMyForm>(
        {
            mode: "onChange"
        }
    )

    const saveElement: SubmitHandler<IMyForm> = data => {
        setTasks( (prev) => [...prev, data] )
        reset()
    }


    const [tasks, setTasks] = useState<IMyForm[]>([])

    return (
        <>
            <FormWrapper>
                    <form onSubmit={handleSubmit(saveElement)}>
                        <div>{errors.name?.message}</div>
                        <input
                            {...register('name', {
                                required: "Поле обязательно для заполения",
                                minLength: {
                                    value: 4,
                                    message: "Нужно больше символов"
                                }
                            })}
                        />
                        <div>{errors.age?.message}</div>
                        <input
                            {...register('age', {
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 2,
                                    message: "Если тебе меньше 10, то тебе рановато здесь быть!"
                                },
                                maxLength: {
                                    value: 3,
                                    message: "Это ложь."
                                }
                            })}
                        />
                        <div>{errors.pl?.message}</div>
                        <input
                            {...register('pl', {
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 2,
                                    message: 'Ну хотя бы go...'
                                }
                            })}
                        />
                        <br/>
                        <button type="submit" disabled={!isValid || !isDirty}>Save</button>
                        <ul>
                            {
                                tasks.map((task) =>
                                    <li>{task.name}: {task.age} - {task.pl}</li>
                                )
                            }
                        </ul>
                    </form>
            </FormWrapper>
        </>
    )
}

export default FormComponent;