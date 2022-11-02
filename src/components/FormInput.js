import {Col, FormGroup, Label} from "reactstrap";
import {Field} from "formik";

const FormInput = ({id, name, placeholder, as}) => {
    return (
        <FormGroup row>
            <Label htmlFor={id}>
                {name}
            </Label>
            <Col>
                <Field
                    as={as}
                    name={id}
                    placeholder={placeholder}
                    className="form-control"
                />
            </Col>
        </FormGroup>
    );
};


export default FormInput;