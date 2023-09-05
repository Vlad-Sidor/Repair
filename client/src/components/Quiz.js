import './/css/index.scss';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchOneDevice} from "../http/deviceAPI";
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form';
 
 function Game() {
   const [device, setDevice] = useState('')
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    
   const questions = [
      {
        title: 'Что случилось со стеральной машиной?',
        variants: [ 
        <>
        <Image width={209} height={152} action="/upload" enctype="multipart/form-data" src={process.env.REACT_APP_API_URL + device.imgone}/>
        <h4 className='imgonequestion' >{device.imgonequestion}</h4>
        </>,
        <>
        <Image width={209} height={152} action="/upload" enctype="multipart/form-data" src={process.env.REACT_APP_API_URL + device.imgtwo}/>
        <h4 className='imgonequestion'>{device.imgtwoquestion}</h4>
        </>,
        <>
        <Image width={209} height={152} action="/upload" enctype="multipart/form-data" src={process.env.REACT_APP_API_URL + device.imgthree}/>
        <h4 className='imgonequestion'>{device.imgthreequestion}</h4>
        </>,
        <>
        <Image width={209} height={152} action="/upload" enctype="multipart/form-data" src={process.env.REACT_APP_API_URL + device.imgfour}/>
        <h4 className='imgonequestion'>{device.imgfourquestion}</h4>
        </>,
         ],
        correct: 0,
      },
      {
         title: device.quiz,
         variants: [
         <Form>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="">
               <Form.Check
                  label= {device.radioquestionone}
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
               />
               <Form.Check
                  label= {device.radioquestiontwo}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
               />
               <Form.Check
                  label= {device.radioquestiononethree}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
               />
               <Form.Check
                  label= {device.radioquestionfour}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
               />
            </div>
            ))}
         </Form>,
          ],
         correct: 1,
       },
      {
        title: '',
        variants: [
         <Form.Group className="mb-3">
         <Form.Control placeholder="По желанию: Адрес куда нужно приехать мастеру" />
         </Form.Group>,
         ],
        correct: 2,
      },
   ];

   const [step, setStep] = useState(0);
   const question = questions[step];

   const percenttage = Math.round(step / questions.length * 100);
   let index
   const onClickVariant = (index) => {
      setStep(step + 1)
   }

   const onClickVariantBack = (index) => {
      setStep(step - 1)
   }

   //step != questions.length

   if (step == 0) {
      return (
         <>
         <div className="conteinerquiz">
             <div className="quiz">
                <div className="quiz-header">
                  
                  <h3 className="quiz-title">Рассчитать стоимость ремонта</h3> 
                  <h3 className="quiz-steps">{step}/{questions.length}</h3>
                </div> 
                <div className="progress">
                   <div style={{ width: `${percenttage}%` }} className="progress__inner"></div>
                </div>
                <div className="quiz-questions">
                  <h3>{question.title}</h3>
                  <ul className='ul-flex'>
                     {question.variants.map((text, index) => (
                        <li onClick={() => onClickVariant(index)}>{text}</li>
                     ))}
                  </ul>
                </div>
                <div className='buttons-flex'>
                  <button  className="buttonback buttonbackone">Назад</button>
                  <button  onClick={() => onClickVariant(index)} className="buttonnext">Далее</button>
                </div>
             </div>
          </div>
         </>
       );
   } else if(step == 1) {
      return (
         <>
         <div className="conteinerquiz">
             <div className="quiz">
                <div className="quiz-header">
                  <h3 className="quiz-title">Рассчитать стоимость ремонта</h3> 
                  <h3 className="quiz-steps">{step}/{questions.length}</h3>
                </div> 
                <div className="progress">
                   <div style={{ width: `${percenttage}%` }} className="progress__inner"></div>
                </div>
                <div className="quiz-questions">
                  <h3>{question.title}</h3>
                  <ul className='ul-flex'>
                     {question.variants.map((text, index) => (
                        <li>{text}</li>
                     ))}
                  </ul>
                </div>
                <div className='buttons-flex'>
                  <button  onClick={() => onClickVariantBack(index)} className="buttonback">Назад</button>
                  <button  onClick={() => onClickVariant(index)} className="buttonnext">Далее</button>
                </div>
             </div>
          </div>
         </>
       );
   } else if(step == 2) {
      return (
         <div className="conteinerquiz">
             <div className="quiz">
                <div className="quiz-header">
                  <h3 className="quiz-title">Рассчитать стоимость ремонта</h3> 
                  <h3 className="quiz-steps">{step}/{questions.length}</h3>
                </div> 
                <div className="progress">
                   <div style={{ width: `${percenttage}%` }} className="progress__inner"></div>
                </div>
                <div className="quiz-questions">
                  <h3>{question.title}</h3>
                  <ul className=''>
                     {question.variants.map((text, index) => (
                        <li >{text}</li>
                     ))}
                  </ul>
                </div>
                <div className='buttons-flex'>
                  <button  onClick={() => onClickVariantBack(index)} className="buttonback">Назад</button>
                  <button  onClick={() => onClickVariant(index)} className="buttonnext">Далее</button>
               </div>
             </div>
          </div>   
      );
   }  else if(step == questions.length) {
      return (
         <div className="conteinerquiz">
         <div className="quiz">
            <div className="quiz-header">
                  <h3 className="quiz-title">Рассчитать стоимость ремонта</h3> 
                  <h3 className="quiz-steps">{step}/{questions.length}</h3>
            </div> 
            <div className="progress">
               <div style={{ width: `${percenttage}%` }} className="progress__inner"></div>
            </div>
            <div className="quiz-questions">
               <ul className=''>
                  <li >
                     <Form.Group className="mb-3">
                     <Form.Control placeholder="Ваш телефон" />
                     </Form.Group>
                  </li>
               </ul>
            </div>
            <div className='buttons-flex'>
               <button  onClick={() => onClickVariantBack(index)} className="buttonback">Назад</button>
               <button   className="buttonnext">Далее</button>
            </div>
         </div>
      </div>
      )
   }
 }

 export default Game