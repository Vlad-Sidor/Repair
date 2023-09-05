import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes, fetchOneDevice, updateOneDevice} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {useParams} from 'react-router-dom'


const UpdateDevice = ({show, onHide, device, id}) => {
    
    const [name, setName] = useState(device.name)
    const [quiz, setQuiz] = useState(device.quiz)
    const [description, setDescription] = useState(device.description)
    const [fileone, setFileOne] = useState(device.fileone)
    const [filetwo, setFileTwo] = useState(device.filetwo)
    const [filethree, setFileThree] = useState(device.filethree)
    const [filefour, setFileFour] = useState(device.filefour)
    const [radioquestionone, seRadioquestionone] = useState(device.radioquestionone)
    const [radioquestiontwo, setRadioquestiontwo] = useState(device.radioquestiontwo)
    const [radioquestiononethree, setRadioquestiononethree] = useState(device.radioquestiononethree)
    const [radioquestionfour, setRadioquestionfour] = useState(device.radioquestionfour)
    const [imgonequestion, setImgonequestion] = useState(device.imgonequestion)
    const [imgtwoquestion, setImgtwoquestion] = useState(device.imgtwoquestion)
    const [imgthreequestion, setImgthreequestion] = useState(device.imgthreequestion)
    const [imgfourquestion, setImgfourquestion] = useState(device.imgfourquestion)
    
    
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
    formData.set('name', name)
    formData.set('quiz', quiz)
    formData.set('description', description)
    formData.set('imgone', fileone)
    formData.set('imgtwo', filetwo)
    formData.set('imgthree', filethree)
    formData.set('imgfour', filefour)
    formData.set('radioquestionone', radioquestionone)
    formData.set('radioquestiontwo', radioquestiontwo)
    formData.set('radioquestiononethree', radioquestiononethree)
    formData.set('radioquestionfour', radioquestionfour)
    formData.set('imgonequestion', imgonequestion)
    formData.set('imgtwoquestion', imgtwoquestion)
    formData.set('imgthreequestion', imgthreequestion)
    formData.set('imgfourquestion', imgfourquestion)
 
    updateOneDevice(id, formData).then(onHide())
    console.log( updateOneDevice(id, formData))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменить услугу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Подпись под фото"
                    />

                    <Form.Control
                        value={description}
                        as="textarea" rows={7}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Подпись под фото"
                    />

                    <Modal.Title id="Подпись под фото">
                     Квиз:
                    </Modal.Title>

                    <Modal.Title id="Подпись под фото">
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
}

export default UpdateDevice;
