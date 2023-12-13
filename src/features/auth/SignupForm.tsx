// Email regex: /\S+@\S+\.\S+/

import Form from "../../shared/ui/Form.tsx";
import {Input} from "../../shared/ui/Input.tsx";
import FormRowVertical from "../../shared/ui/FormRowVertical.tsx";
import Button from "../../shared/ui/Button.tsx";

function SignupForm() {
    return (
        <Form>
            <FormRowVertical label="Full name" error={""}>
                <Input type="text" id="fullName"/>
            </FormRowVertical>

            <FormRowVertical label="Email address" error={""}>
                <Input type="email" id="email"/>
            </FormRowVertical>

            <FormRowVertical label="Password (min 8 characters)" error={""}>
                <Input type="password" id="password"/>
            </FormRowVertical>

            <FormRowVertical label="Repeat password" error={""}>
                <Input type="password" id="passwordConfirm"/>
            </FormRowVertical>

            <FormRowVertical>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button>Create new user</Button>
            </FormRowVertical>
        </Form>
    );
}

export default SignupForm;
