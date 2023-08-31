import { NextRequest, NextResponse } from 'next/server'
import json from '../mock.json'
import { CardProps } from "../components/card/card";

enum FILTER_BY_OPTIONS  {
  NAME = 'name',
  REGION = 'region',
  CQCRATING = 'cqcRating',
  PRICE='price'
}

export const GET = async (
  req: NextRequest,
  res: NextResponse<CardProps[]>
) => {
  const filterBy = req.nextUrl.searchParams.get('filterBy')
  const criteria = req.nextUrl.searchParams.get('criteria')
  
  const cards: CardProps[] = Object.entries(json).map(([id, value]) => ({
    data: {
      id,
      ...value
    },
  }));

  if( !criteria){
    // Returns all cards
    return NextResponse.json(cards);
  }

    if(filterBy === FILTER_BY_OPTIONS.NAME){
      return NextResponse.json(cards.filter(card => card.data.name === criteria));    
    } else if(filterBy === FILTER_BY_OPTIONS.REGION){
      return NextResponse.json(cards.filter(card => card.data.region === criteria));  
    } else if(filterBy === FILTER_BY_OPTIONS.CQCRATING){
      return NextResponse.json(cards.filter(card => card.data.cqcRating === criteria));   
    } else if(filterBy === FILTER_BY_OPTIONS.PRICE){
      return NextResponse.json(cards.filter(card => card.data.pricesFrom.toString() === criteria));   
    } else {
      return NextResponse.json(cards);
    }
}
