const listcomponentTemplate = `




  return (
    <Modal show={show} size="lg" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create ${EntityNameTitleCase}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                value={${EntityNameCamelCase}.name}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>email</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                value={${EntityNameCamelCase}.email}
                type="text"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>email</Form.Label>
              <Form.Control
                onChange={handleFileChange}
                name="image"
                type="file"
                placeholder="Image"
              />
            </Form.Group>
          </Form.Row>
        </Form>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={On${EntityNameTitleCase}Create}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

`;
