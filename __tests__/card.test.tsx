import { render, screen } from '@testing-library/react'
import Card from '../src/app/components/Card/Card'
import '@testing-library/jest-dom'
 
describe('Card', () => {
  const mockData = {
    "2500": {
      "id": "2500",
      "name": "Marlborough House",
      "imagePath": "Anavo+Care_Marlborough+House_001.jpeg",
      "location": "Fleet",
      "cqcRating": "Good",
      "pricesFrom": 1100,
      "greenerChoice": false,
      "region": "South East England",
      "county": "Hampshire",
      "listingUrl": "https://lottie.org/care-home/england/south-east-england/hampshire/hart-area/fleet/gu52/marlborough-house/",
      "lat": 51.2647098,
      "lon": -0.8238492,
      "pricing": {
          "permanent": {
              "residential": "1100",
              "residentialDementia": "1100",
              "nursing": "1200",
              "nursingDementia": "1200"
          },
          "respite": {
              "residential": "1100",
              "residentialDementia": "1100",
              "nursing": "1200",
              "nursingDementia": "1200"
          }
      }
  }
  }
  it('renders the selection buttons', () => {
    render(<Card data={mockData[2500]}/>)
    const card2500 = screen.getByTestId('card-container', {
    })
    expect(card2500).toBeInTheDocument()
    expect(card2500).toContainHTML('h1')
    expect(card2500).toHaveTextContent("Marlborough House")
    expect(card2500).toHaveTextContent("CQC Rating: Good")
    expect(card2500).toHaveTextContent("From: £1100 Weekly")
  })
})