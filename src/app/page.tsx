'use client'
import styles from './page.module.css'
import Card, {CardProps} from './components/Card/Card'
import json from './mock.json'
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';

type Inputs = {
  filterBy: string,
  criteria: string,
};

export default function Home() {

  // We are using a cached version of our database as a mock here but this would be replaced with a call to the API
  const defaultCards: CardProps[] = Object.entries(json).map(([id, value]) => ({
    data: {
      id, ...value
    },
  }));

  const [cardsToBeRendered, setCardsToBeRendered] = useState<CardProps[]>(defaultCards)

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async data => {
    const response = await fetch(`http://localhost:3000/api/?filterBy=${data.filterBy}&criteria=${data.criteria}`)
    const responseJson :JSON = await response.json()
    const cardsToBeDisplayed: CardProps[] = Object.entries(responseJson).map(([id, value]) => ({
      id, ...value
    }));
    if (cardsToBeDisplayed.length === 0) {
      alert('No Results Found')
      return
    }
    setCardsToBeRendered(cardsToBeDisplayed)
  }

  return (
    <main>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input data-testid="form-region" type="radio" value="region"{...register("filterBy")}/>Region<br/>
            <input data-testid="form-cqcRating" type="radio" value="cqcRating" {...register("filterBy")}/>CQC Rating<br/>
            <input data-testid="form-price" type="radio" value="price"{...register("filterBy")} />Price<br/>
            <input data-testid="form-name" type="radio" value="name"{...register("filterBy")} />Name<br/>
            <input {...register("criteria", { required: true })} />
            {errors.criteria && <div className={styles.errorMessage}> Please Enter A Search Term </div>}
              <input type="submit" />
        </form>
      </div>
        {cardsToBeRendered.map((card, id) => <Card data={card.data} key={id} data-testid={`${id}`}/>)}
    </main>
  )

  
}
