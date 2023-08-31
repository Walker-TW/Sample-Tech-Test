import Image from 'next/image'
import styles from './card.module.css'

export type CardProps = {
    data: {
      id: string,
      name: string,
      imagePath: string,
      location: string,
      cqcRating: string,
      pricesFrom: number,
      greenerChoice: boolean,
      region: string,
      county: string,
      listingUrl: string,
      lat: number,
      lon: number,
      pricing: {
      permanent: {
          residential: string,
          residentialDementia: string,
          nursing: string,
          nursingDementia: string
      },
      respite: {
          residential: string,
          residentialDementia: string,
          nursing: string,
          nursingDementia: string
      }
      }
    }
}

export default function Card({data}: CardProps) {

  const showIcon = (icon: boolean) => {
    return icon ? 
    <Image
      src='/checkmark-circle-outline.svg'
      alt='Green Tick'
      style={{color: 'green'}}
      height={12}
      width={12}
      title={'Green Cross'}
    /> : 
    <Image
      src='/close-circle-outline.svg'
      style={{color: 'red'}}
      alt='Red Cross'
      height={12}
      width={12}
      title={'Red Cross'}
    />
  }

  return (
    <div className={styles.cardContainer} data-testid="card-container">
      <Image
        src={`https://lottie-boh-assets.s3.eu-west-2.amazonaws.com/${data.imagePath}`}
        alt={`A Picture of ${data.name}`}
        width={500}
        height={400}
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <h1 className={styles.name}>{data.name}</h1>
        <div className={styles.cqcRating}><b className={styles.cqcText}>CQC Rating:</b> {data.cqcRating}</div>
        <div className={styles.pricesFrom}> From: <b>£{data.pricesFrom} </b>Weekly</div>
        <div className={styles.location}> Location: <b>{data.location} </b></div>
        <div className={styles.region}> Region: <b>{data.region} </b></div>
        <div className={styles.greenerChoice}>{showIcon(data.greenerChoice)} Greener Choice</div>
      </div>
    </div>
  )
}