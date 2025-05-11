import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { uid } from 'uid';
import Family from 'assets/family.svg'
import FamilySmall from 'assets/family-small.svg'
import Badge from 'components/Badge/index';
import SelectInput from 'components/SelectInput';
import type { CallbackFn } from 'interfaces/pages/IStartQuote';
import type { IDocument } from 'interfaces/components/ISelectInput';
import { documentOptions } from 'const';
import Input from 'components/Input';
import Check from 'components/Check';
import Button from 'components/Button';
import { useMyContext } from 'context/useContext';
import { useGetUser } from 'api/useUser';

import './style.scss'
import Line from 'src/components/Line';

const StartQuote = () => {

  const navigate = useNavigate()

  const [numberDocument, setNumberDocument] = useState<string>('')
  const [celphone, setCelphone] = useState<string>('')
  const [numberDocumentError, setNumberDocumentError] = useState<string>('')
  const [celphoneError, setCelphoneError] = useState<string>('')
  const [documentType, setDocumentType] = useState<IDocument>({ id: '', label: '', text:'', value: '' })
  const [checkPrivacity, setCheckPrivacity] = useState<boolean>(false)
  const [checkComunication, setCheckComunication] = useState<boolean>(false)
  const [checkError, setCheckError] = useState<string>('')

  const { actNumberDocument, actPhone, actTypeDocumet, actUser } = useMyContext();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>, cb: CallbackFn) => {
    cb(e.target.value)
  }

  const onChangeSelect = (doc: IDocument) => {
    setDocumentType(doc)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setNumberDocumentError('')
    setCelphoneError('')
    setCheckError('')

    let error = false

    if (!documentType.value) {
      setNumberDocumentError('Seleccione tipo de documento')
    }

    if (documentType.value === 'CE' && !/^\d{12}$/.test(numberDocument)) {
      setNumberDocumentError('CE incorrecto')
      error = true
    }

    if (documentType.value === 'DNI' && !/^\d{8}$/.test(numberDocument)) {
      setNumberDocumentError('DNI incorrecto')
      error = true
    }

    if (!/^\d{9}$/.test(celphone)) {
      setCelphoneError('Ingrese los 9 dígitos')
      error = true
    }

    if (!checkPrivacity || !checkComunication) {
      setCheckError('Acepte las políticas')
      error = true
    }

    if (!error){

      const user = await useGetUser()

      actUser(user)
      actNumberDocument(numberDocument)
      actPhone(celphone)
      actTypeDocumet(documentType.value)

      navigate('/quote')
    }
  }

  return (
    <div className='startQuote'>
      <div className='startQuote__image'>
        <img src={Family} alt="family" />
      </div>
      <div className='startQuote__init'>
        <div className='startQuote__head'>
          <div>
            <Badge text='Seguro Salud Flexible' theme='badge__primary' />
            <p className='startQuote__title'>
              Creado para ti y tu <br /> familia
            </p>
          </div>
          <img src={FamilySmall} alt="family-small" />
        </div>
        <Line marginBottom='24px' marginTop='24px' />
        <p className='startQuote__paragraph'>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y <br />
          recibe nuestra asesoría. 100% online.
        </p>
        <form className='startQuote__form' onSubmit={onSubmit}>
          <SelectInput
            onChangeInput={(e) => onChangeInput(e, setNumberDocument)}
            onChangeSelect={onChangeSelect}
            placeHolderInput="Nro. de documento"
            placeHolderSelect="Doc."
            valueInput={numberDocument}
            options={documentOptions}
            selected={documentType}
            disabledInput={!documentType.value}
            disabledSelect={false}
            error={numberDocumentError}
          />
          <br />
          <Input
            onChange={(e) => onChangeInput(e, setCelphone)}
            placeholder="Celular"
            value={celphone}
            disabled={false}
            error={celphoneError}
          />
          <br />
          <div className='startQuote__policy'>
            <Check
              onChange={() => setCheckPrivacity(prevState => !prevState)}
              defaultChecked={checkPrivacity}
              id={uid()}
              label='Acepto lo Política de Privacidad'
            />
            <Check
              onChange={() => setCheckComunication(prevState => !prevState)}
              defaultChecked={checkComunication}
              id={uid()}
              label='Acepto la Política Comunicaciones Comerciales'
            />
            {checkError && <span className='c_input__error'>{checkError}</span>}
            <a href="#">Aplican Términos y Condiciones.</a>
          </div>
          <br />
          <Button label='Cotiza aquí' theme='black' />
        </form>
      </div>
    </div>
  )
}

export default StartQuote