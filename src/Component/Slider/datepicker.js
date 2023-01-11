import React from 'react';
import Form from 'react-bootstrap/Form'

const DatePicker = () => {

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <Form>
            <Form.Group><input className="form-date" type="date" name="date"   min={disablePastDate()}/></Form.Group>
        </Form>
        
    )
}

export default DatePicker 