import {Button, Container} from "reactstrap";
import SubHeader from "../components/SubHeader";
import {Formik, Form} from "formik";
import FormInput from "../components/FormInput";

const Journal = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Container>
            <SubHeader currentPage="Journal"/>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormInput
                        id="title"
                        name="Entry Title"
                    />
                    <FormInput
                        id="body"
                        name="Today.."
                        as="textarea"
                        placeholder="Dear Diary..."
                    />
                    <Button type="submit" color="primary">
                        Save Entry
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default Journal;