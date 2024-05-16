import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from './Document'
import { useFormData } from './hook.tsx'
import {Form} from './styles.ts'


const Pdf = () => {
    const { handleSubmit, generatePdfFile, register, errors, formData } =
        useFormData()
    return (
        <>
            <Form onSubmit={handleSubmit(generatePdfFile)}>
                <input
                    data-testid={'input-update'}
                    placeholder={'Введите ваше имя'}
                    alt={'test'}
                    {...register('name', {
                        required: 'Поле обязательно для заполнения!',
                        minLength: {
                            value: 3,
                            message: 'Нужно больше символов'
                        }
                    })}
                />
                <input
                    type='file'
                    accept='image/*'
                    {...register('picture', {
                        required: 'Загрузите картинку!'
                    })}
                />
                {errors && <div>{errors?.name?.message}</div>}
                <button type='submit'>Сохранить</button>
            </Form>
            {formData && (
                <PDFDownloadLink
                    document={
                        <MyDocument name={formData.name} picture={formData.picture} />
                    }
                    fileName={`${formData.name}.pdf`}
                >
                    {({  loading, }) =>
                        loading ? 'Загрузка...' : 'Скачать'
                    }
                </PDFDownloadLink>
            )}
        </>
    )
}

export default Pdf