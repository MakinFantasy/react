import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./Document";
import { useFormData } from "./hook.tsx";
import { Form } from "./styles.ts";

const Pdf = () => {
  const { handleSubmit, generatePdfFile, register, errors, formData } = useFormData();
  return (
    <>
      <Form onSubmit={handleSubmit(generatePdfFile)}>
        <input
          data-testid={"input-update"}
          placeholder={"Введите ваше имя"}
          alt={"test"}
          {...register("name", {
            required: "Поле обязательно для заполнения!",
            minLength: {
              value: 3,
              message: "Нужно больше символов",
            },
          })}
        />
        <input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Загрузите картинку!",
          })}
        />
        {errors && <div>{errors?.name?.message}</div>}
        <input
          placeholder="Введите вашу почту"
          type="email"
          {...register("email", {
            required: "Обязательно к заполнению",
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            minLength: {
              value: 10,
              message: "Введите почту форма example@site.ru",
            },
          })}
        />
        <input
          placeholder="Введите ваш возраст"
          type="number"
          {...register("age", {
            required: "Обязательно к заполнению",
          })}
        />
        <button type="submit">Сохранить</button>
      </Form>
      {formData && (
        <PDFDownloadLink
          document={
            <MyDocument name={formData.name} picture={formData.picture} email={formData.email} age={formData.age} />
          }
          fileName={`${formData.name}.pdf`}
        >
          {({ loading }) => (loading ? "Загрузка..." : "Скачать")}
        </PDFDownloadLink>
      )}
    </>
  );
};

export default Pdf;
