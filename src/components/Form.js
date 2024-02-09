import icon from '../images/icon-arrow.svg'
import { useState } from 'react'
import '../styles/form.css'

const Form = () => {
  // -------------------------------------------------------
  // etat initial des donnees
  const initialState = {
    day: 0,
    month: 0,
    year: 0
  }
  const [formData, setData] = useState(initialState) 
  // -------------------------------------------------------

  // -------------------------------------------------------
  // recuperation des donnees entrer par l'utilisateur
  const onChange = (e) => {
    const { name, value } = e.target
    setData({ ...formData, [name]: value})
  }
  const { day, month, year } = formData
  // -------------------------------------------------------
  
  // -------------------------------------------------------
  // calcule de l'age de l'utilisateur et les conditions
  const birthday = `${year}/${month}/${day}`
  const birthDate = new Date(birthday)
  const now = new Date()
  let years = now.getFullYear() - birthDate.getFullYear()
  let months = now.getMonth() - birthDate.getMonth()
  let days = now.getDate() - birthDate.getDate()
  if (months < 0 || (months === 0 && days < 0)) {
    years--
    months += 12
  }
  const monthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
  if (days < 0) {
    days += monthDays
    months--
  }
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // verification des donnees entrer par l'utilisateur si il sont correct ou pas
  const isValidInputDay = /^[0-9]+$/.test(day) 
  const isValidInputMonth = /^[0-9]+$/.test(month)
  const isValidInputYear = /^[0-9]+$/.test(year)
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // message d'erreur apres la verification des donnees entrer par l'utilisateur s'ils sont fausses ou pas
  let errorMessageDay = isValidInputDay ? `` : `enter 0-9`
  let errorMessageMonth = isValidInputMonth ? `` : `enter 0-9`
  let errorMessageYear = isValidInputYear ? `` : `enter 0-9`
  // ---------------------------------------------------------
  
  // ---------------------------------------------------------
  // definition des valeus par default des resultats de (year, month et day) avant l'entrer des donnees par l'utilisateur
  years = years || '--'
  months = months || '--'
  days = days || '--'
  // ---------------------------------------------------------


  return (
    <div className='form-wrapper'>
      <form>
          <div className='input-wrapper'>
            <div className='day'>
              <label 
                htmlFor='day'
                style={{
                  color : isValidInputDay ? `hsl(0, 1%, 44%)` : `red`
                }}
              >DAY</label>
              <input
                id='day'
                type="text"
                inputMode='numeric'
                pattern='[0-9]+'
                placeholder="DD"
                name="day"
                onChange={onChange}
                style={{
                  borderColor : isValidInputDay ? `hsl(0, 1%, 44%)` : `red`
                }}
              />
              <p
                style={{
                  color : isValidInputDay ? `hsl(0, 1%, 44%)` : `red`
                }}
              >{errorMessageDay}</p>
            </div>
            <div className='month'>
              <label 
                htmlFor='month'
                style={{color : isValidInputMonth ? `hsl(0, 1%, 44%)` : `red`}}
              >MONTH</label>
              <input
                id='month'
                type="text"
                inputMode='numeric'
                pattern='[0-9]+'
                placeholder="MM"
                name="month"
                onChange={onChange}
                style={{
                  borderColor : isValidInputMonth ? `hsl(0, 1%, 44%)` : `red`
                }}
              />
              <p
                style={{
                  color : isValidInputMonth ? `hsl(0, 1%, 44%)` : `red`
                }}
              >{errorMessageMonth}</p>
            </div>
            <div className='year'>
              <label 
                htmlFor='year'
                style={{
                  color : isValidInputYear ? `hsl(0, 1%, 44%)` : `red`
                }}
              >YEAR</label>
              <input
                id='year'
                type="text"
                inputMode='numeric'
                pattern='[0-9]+'
                placeholder="YYYY"
                name="year"
                onChange={onChange}
                style={{
                  borderColor : isValidInputYear ? `hsl(0, 1%, 44%)` : `red`
                }}
              />
              <p
                style={{
                  color : isValidInputYear ? `hsl(0, 1%, 44%)` : `red`
                }}
              >{errorMessageYear}</p>
            </div>
          </div>
          <div className='img-wrapper'>
            <img 
              src={icon} 
              alt='icon arrow'
            />
          </div>
          <div className='results-wrapper'>
            <h1><strong>{years}</strong> years</h1>
            <h1><strong>{months}</strong> months</h1>
            <h1><strong>{days}</strong> days</h1>
          </div>
        </form>
      </div>
  )
}

export default Form