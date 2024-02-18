import React, { useState } from "react";
import "../COMPONENTS/Sform.css";
import { Button, Col, Form, Row } from "react-bootstrap";

const Sform = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelectChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  return (
    <div className="studentForm">
      <Form className="sForm">
        <h1 className="heading">Registration Form</h1>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="label">First Name</Form.Label>
              <Form.Control
                type="type"
                placeholder="Enter Your First Name "
                name="FirstName"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="label">Last Name Name</Form.Label>
              <Form.Control
                type="type"
                placeholder="Enter Your Last Name "
                name="LastName"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicDob">
          <Form.Label className="label">Date OF Birth</Form.Label>
          <Form.Control className="dob" type="date" name="DOB"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="sex">
          <Form.Label className="label">Gender</Form.Label>

          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Male"
                name="Gender"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Female"
                name="Gender"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Other"
                name="Gender"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label className="label">Phone Number</Form.Label>
          <div id="phoneNumber">
            <Form.Control id="ccode" as="select">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
              <option>+61</option>
              <option>+20</option>
            </Form.Control>

            <Form.Control id="pnum" type="tel"></Form.Control>
          </div>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="label">Current Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="label">Permanent Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label className="label">Skills</Form.Label>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="HTML & CSS"
                name="group2"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label=" JAVASCRIPT"
                name="group2"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="REACT JS "
                name="group2"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="NODE JS "
                name="group2"
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                label="MONGO DB "
                name="group2"
                type={type}
                id={`inline-${type}-5`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group controlId="multiselection">
          <Form.Label className="label">Preferred Location </Form.Label>
          <Form.Control as="select" multiple onChange={handleSelectChange}>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Chennai">Chennai</option>
            <option value="Hydrabad">Hydrabad</option>
          </Form.Control>
        </Form.Group>

        <div>
          <div>Selected option: {selectedOptions.join(", ")}</div>
        </div>
        <Button type="submit" className="registerbtn">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Sform;
