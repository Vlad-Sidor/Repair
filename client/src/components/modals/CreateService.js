import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [quiz, setQuiz] = useState('')
    const [description, setDescription] = useState('')
    const [fileone, setFileOne] = useState(null)
    const [filetwo, setFileTwo] = useState(null)
    const [filethree, setFileThree] = useState(null)
    const [filefour, setFileFour] = useState(null)
    const [radioquestionone, seRadioquestionone] = useState('')
    const [radioquestiontwo, setRadioquestiontwo] = useState('')
    const [radioquestiononethree, setRadioquestiononethree] = useState('')
    const [radioquestionfour, setRadioquestionfour] = useState('')
    const [imgonequestion, setImgonequestion] = useState('')
    const [imgtwoquestion, setImgtwoquestion] = useState('')
    const [imgthreequestion, setImgthreequestion] = useState('')
    const [imgfourquestion, setImgfourquestion] = useState('')

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const selecFileOne = e => {
        setFileOne(e.target.files[0])
        console.log(e.target.files[0])
    }

    const selecFileTwo = e => {
        setFileTwo(e.target.files[0])
        console.log(e.target.files[0])
    }

    const selecFileThree = e => {
        setFileThree(e.target.files[0])
        console.log(e.target.files[0])
    }

    const selecFileFour = e => {
        setFileFour(e.target.files[0])
        console.log(e.target.files[0])
    }


    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('quiz', quiz)
        formData.append('description', description)
        formData.append('imgone', fileone)
        formData.append('imgtwo', filetwo)
        formData.append('imgthree', filethree)
        formData.append('imgfour', filefour)
        formData.append('radioquestionone', radioquestionone)
        formData.append('radioquestiontwo', radioquestiontwo)
        formData.append('radioquestiononethree', radioquestiononethree)
        formData.append('radioquestionfour', radioquestionfour)
        formData.append('imgonequestion', imgonequestion)
        formData.append('imgtwoquestion', imgtwoquestion)
        formData.append('imgthreequestion', imgthreequestion)
        formData.append('imgfourquestion', imgfourquestion)
     
        createDevice(formData).then(onHide())
    }
    

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить услугу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название услуги"
                    />

                    <Form.Control
                        value={description}
                        as="textarea" rows={7}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание"
                    />

                    <Modal.Title id="contained-modal-title-vcenter">
                     Квиз:
                    </Modal.Title>

                    <Modal.Title id="contained-modal-title-vcenter">
                     Первый вопрос:
                    </Modal.Title>

                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selecFileOne}
                    />
                    
                    <Form.Control
                        value={imgonequestion}
                        onChange={e => setImgonequestion(e.target.value)}
                        className="mt-3"
                        placeholder="Подпись под фото"
                    />
                    
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selecFileTwo}
                    />

                    <Form.Control
                        value={imgtwoquestion}
                        onChange={e => setImgtwoquestion(e.target.value)}
                        className="mt-3"
                        placeholder="Подпись под фото"
                    />

                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selecFileThree}
                    />

                    <Form.Control
                        value={imgthreequestion}
                        onChange={e => setImgthreequestion(e.target.value)}
                        className="mt-3"
                        placeholder="Подпись под фото"
                    />

                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selecFileFour}
                    />
                    
                    <Form.Control
                        value={imgfourquestion}
                        onChange={e => setImgfourquestion(e.target.value)}
                        className="mt-3"
                        placeholder="Подпись под фото"
                    />

                    <Modal.Title id="contained-modal-title-vcenter">
                     Второй вопрос:
                    </Modal.Title>
                    
                    <Form.Control
                        value={quiz}
                        onChange={e => setQuiz(e.target.value)}
                        className="mt-3"
                        placeholder="Введите заголовок поля"
                    />


                    <Form.Control
                        value={radioquestionone}
                        onChange={e => seRadioquestionone(e.target.value)}
                        className="mt-3"
                        placeholder="Введите вариант 1"
                    />

                    <Form.Control
                        value={radioquestiontwo}
                        onChange={e => setRadioquestiontwo(e.target.value)}
                        className="mt-3"
                        placeholder="Введите вариант 2"
                    />

                    <Form.Control
                        value={radioquestiononethree}
                        onChange={e => setRadioquestiononethree(e.target.value)}
                        className="mt-3"
                        placeholder="Введите вариант 3"
                    />

                    <Form.Control
                        value={radioquestionfour}
                        onChange={e => setRadioquestionfour(e.target.value)}
                        className="mt-3"
                        placeholder="Введите вариант 4"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    );
});

export default CreateDevice;
