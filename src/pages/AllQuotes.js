import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES =[
    {id: 'q1', author:'Kru', text: 'Never Give Up' },
    {id: 'q2', author:'Erica Jong', text: 'If you don’t risk anything, you risk even more!' },
]

const AllQuotes =()=>{
    return <QuoteList quotes={DUMMY_QUOTES} />
};
export default AllQuotes;