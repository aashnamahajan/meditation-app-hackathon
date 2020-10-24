import React from 'react'
import DetailedEventCard from '../Event/DetailedEventCard'
import Grid from '@material-ui/core/Grid';


interface Props {
    cards: Array<object>
}
/**
 * This is the JitsiVideochat component
 * DEVELOP:
 */
const CardsContainer: React.FC<Props> = (props) => {

    const renderCards = () => {
        console.log(props.cards)
        return props.cards.map((card: {
            title: string;
            date: string;
            time: string;
            }) => {return (
                <Grid 
                item 
                justify="center" 
                direction="row" 
                alignItems="flex-start" 
                xs={3}>
                    <DetailedEventCard card={card}>  </DetailedEventCard>
                </Grid>
                
                )})
    }

    return (
        <>
        <div class="container">
            <Grid 
            container 
            item 
            justify="center" 
            direction="row" 
            alignItems="flex-start" 
            xs={12} 
            spacing={3}
            >
                {renderCards()}
            </Grid>
        </div>
        </>
    )
}

export default CardsContainer